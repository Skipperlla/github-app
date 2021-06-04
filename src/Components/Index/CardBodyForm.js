import { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import LastSearch from "./LastSearch";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const CardBodyForm = () => {
  const { error, setError, lastSearchText } = useContext(UserContext);
  const refInput = useRef();
  const [text, setText] = useState({ username: "" });
  const history = useHistory();
  const onChangeInput = (event) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };
  function getTodosFromStorage() {
    // Storagedan Todoları Alma
    let todos;

    if (localStorage.getItem("Users") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("Users"));
    }
    return todos;
  }

  const onSubmitChange = async (e) => {
    e.preventDefault();
    let todos = getTodosFromStorage();
    await axios
      .get(`https://api.github.com/users/${text.username}`)
      .then(() => {
        todos.push(text.username);
        localStorage.setItem("Users", JSON.stringify(todos));
        history.push(`/${text.username}`);
      })
      .catch((error) => {
        if (error.response.status === 404 || text.username) {
          setError("Böyle Bir Kullanıcı Bulunamadı");
        }
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };
  return (
    <div className="uk-width-1-2@m uk-flex-first uk-margin-right@m uk-first-column">
      <h3 className="uk-margin-remove-top">Type Your Github Username</h3>
      <form onSubmit={(e) => onSubmitChange(e)}>
        <input
          name="username"
          value={text.username}
          className="uk-input uk-form-width-auto uk-margin-bottom"
          type="text"
          placeholder="Username"
          onChange={onChangeInput}
          ref={refInput}
        />
        <button
          className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
          type="submit"
        >
          Generate
        </button>
        {error && (
          <div className="uk-alert-danger" uk-alert="true">
            <a className="uk-alert-close" ></a>
            <p>{error}</p>
          </div>
        )}
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
