import { useHistory } from "react-router-dom";
import { useRef, useContext } from "react";
import { UserContext } from "../../context/UserContext";

const CardBodyForm = ({userInfo}) => {
  const { userName, setUserName } = useContext(UserContext);
  const refInput = useRef();
  const refAlert = useRef();
  const history = useHistory();


  const onChangeInput = (event) => {
    setUserName(event.target.value);
  };

  const onClickButton = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    if (userInfo.message !== "Not Found") {
      history.push(`/${userName}`);
    }else {
      refAlert.current.style = "display:block";
      setTimeout(() => (refAlert.current.style = "display:none"), 2000);
    }
  };

  return (
    <div className="uk-margin uk-width-1-2">
      <h3 className="uk-margin-remove-top">Type Your Github Username</h3>
      <form >
        <input
          className="uk-input uk-form-width-auto uk-margin-bottom"
          type="text"
          placeholder="Username"
          onChange={(event) => onChangeInput(event)}
          ref={refInput}
        />
        <div
          className="uk-alert-danger"
          style={{ display: "none" }}
          ref={refAlert}
          uk-alert="false"
        >
          <p>Please enter a valid Github username</p>
        </div>
        <button
          className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
          type="submit"
          onClick={onClickButton}
        >
          Gender
        </button>
      </form>
      <div className="uk-margin-top">
        <ul className="uk-iconnav uk-flex uk-flex-center">
          <li className="uk-margin-small-right">
            <a
              href="https://github.com/Skipperlla"
              uk-icon="icon: github;ratio:2"
              target="_blank"
            ></a>
          </li>
          <li>
            <a
              href="https://twitter.com/Skipperlla"
              uk-icon="icon: twitter;ratio:2"
              target="_blank"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CardBodyForm;
