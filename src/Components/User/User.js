/* eslint-disable no-unused-vars */
import UserHeader from "./UserHeader";
import UserBody from "./UserBody";
import Language from "./Language";
import { GetRepos, GetUser, GetOrgs } from "../../utils/utils";
import { useParams, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import ModalPage from "./ModalPage";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const User = () => {
  const { Username } = useParams();
  const { setError } = useContext(UserContext);

  const [userInfo, setuserInfo] = useState([]);
  const [userRepo, setuserRepo] = useState([]);
  const [userOrgs, setuserOrgs] = useState([]);
  const history = useHistory();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    GetUser(Username, setuserInfo).catch((error) =>
      error.response.status === 404
        ? (setError("Böyle Bir Kullanıcı Bulunamadı"),
          setTimeout(() => {
            setError("");
          }, 2000),
          history.push(`/`))
        : null
    );
    GetRepos(Username, setuserRepo).catch((error) =>
      error.response.status === 404
        ? (setError("Böyle Bir Kullanıcı Bulunamadı"),
          setTimeout(() => {
            setError("");
          }, 2000),
          history.push(`/`))
        : null
    );
    GetOrgs(Username, setuserOrgs).catch((error) =>
      error.response.status === 404
        ? (setError("Böyle Bir Kullanıcı Bulunamadı"),
          setTimeout(() => {
            setError("");
          }, 2000),
          history.push(`/`))
        : null
    );
    await fetch(`https://api.github.com/users/${Username}`).then((res) =>
      res.json()
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Username]);

  return (
    <>
      <div className="uk-container uk-padding">
        <Link
          to="/"
          uk-icon="icon: arrow-left; ratio: 2"
          className="uk-link-reset"
        ></Link>
        <div className="uk-card uk-card-default">
          <UserHeader userInfo={userInfo} />
          <UserBody userRepo={userRepo} />
          <Language
            LanguageRepo={userRepo}
            OrgsRepo={userOrgs}
            userInfo={userInfo}
          />
        </div>
      </div>
      <ModalPage />
    </>
  );
};

export default User;
