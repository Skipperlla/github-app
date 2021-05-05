import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import LastSearch from "./LastSearch";
import Cookie from "js-cookie";

const CardBodyForm = () => {
  const refInput = useRef();
  const history = useHistory();
  const arr = [];
  const [text, setText] = useState();

  // const onChangeInput = (event) => {
  //   setText(event.target.value);
  // };

  const onSubmitChange = (e) => {
    e.preventDefault();
    setText(refInput.current.value);
    arr.push(text)
    localStorage.setItem('Users',JSON.stringify(arr));
    Cookie.set('Users',arr,{ expires: 7 })
    
    console.log(arr);
    // if (text) {
    //   history.push(`/${text}`);
    // }
  };
  return (
    <div className="uk-margin uk-width-1-2">
      <h3 className="uk-margin-remove-top">Type Your Github Username</h3>
      <form>
        <input
          className="uk-input uk-form-width-auto uk-margin-bottom"
          type="text"
          placeholder="Username"

          ref={refInput}
        />
        <button
          className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
          type="submit"
          onClick={(e) => onSubmitChange(e)}
        >
          Generate
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
      <LastSearch />
    </div>
  );
};
export default CardBodyForm;
