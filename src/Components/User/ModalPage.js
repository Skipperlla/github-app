import { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import "../../style/Modal.css";
import { useParams } from "react-router-dom";
import ImageZoom from "react-medium-image-zoom";
import fileDownload from "js-file-download";

import axios from "axios";
import User from "./User";
Modal.setAppElement("#root");

const ModalPage = () => {
  const { Username } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false);
  const codeRef = useRef();
  const paramsValue = window.location + window.location.search;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onClickClipboard = () => {
    navigator.clipboard.writeText(paramsValue);
    codeRef.current.innerText = "Copied";
  };

  const onMouseoutBoard = () => {
    navigator.clipboard.writeText(paramsValue);
    codeRef.current.innerText = "Copy to clipboard";
  };

  async function download() {
    await axios
      .get(
        `https://api.apiflash.com/v1/urltoimage?access_key=${process.env.REACT_APP_ACCESS_KEY}&url=https://github-app-blue.vercel.app/${Username}&full_page=%22true%22&fresh=%22true%22`,
        {
          responseType: "blob",
        }
      )
      .then((res) => {
        fileDownload(res.data, `${Username}.jpg`);
      });
  }

  const url = `https://api.apiflash.com/v1/urltoimage?access_key=${process.env.REACT_APP_ACCESS_KEY}&url=https://github-app-blue.vercel.app/${Username}&full_page=%22true%22&fresh=%22true%22`;

  return (
    <>
      <button
        onClick={openModal}
        className="uk-button uk-button-primary uk-position-fixed uk-position-bottom-right uk-margin-bottom uk-margin-right"
        style={{borderRadius:"6px"}}
      >
        Share
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        closeTimeoutMS={500}
      >
        <h2 className="uk-modal-title">For Picture</h2>
        <p>
          <ImageZoom
            image={{
              src: url,
              alt: `${User}`,
              className: "img",
            }}
            zoomImage={{
              src: url,
              alt: `${User}`,
            }}
            className="bg"
          />
          <button
            onClick={download}
            className="uk-button uk-button-primary uk-margin-top"
            style={{borderRadius:"6px"}}
          >
            Download
          </button>
        </p>
        <h2 className="uk-modal-title">For Link</h2>
        <div className="tooltip">
          <p>
            <span className="tooltiptext" id="myTooltip" ref={codeRef}>
              Copy to clipboard
            </span>
            <code onClick={onClickClipboard} onMouseOut={onMouseoutBoard}>
              {paramsValue}
            </code>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ModalPage;
