/* eslint-disable no-unused-vars */
import UserHeader from "./UserHeader";
import UserBody from "./UserBody";
import Language from "./Language";
import { GetRepos, GetUser, GetOrgs } from "../../utils/utils";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import ModalPage from "./ModalPage";
import {Link} from "react-router-dom"

const User = () => {
  const { Username } = useParams();

  const [userInfo, setuserInfo] = useState([]);
  const [userRepo, setuserRepo] = useState([]);
  const [userOrgs, setuserOrgs] = useState([]);
  const history = useHistory();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    GetUser(Username, setuserInfo);
    GetRepos(Username, setuserRepo);
    GetOrgs(Username, setuserOrgs);
    await fetch(`https://api.github.com/users/${Username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          alert("Kullanıcı Bulunamadı");
          history.push("/");
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Username]);

  return (
    <>
    
    <div className="uk-container uk-padding">
    <Link to="/" uk-icon="icon: arrow-left; ratio: 2" className="uk-link-reset"></Link>
      <div className="uk-card uk-card-default">
        <UserHeader userInfo={userInfo}/>
        <UserBody userRepo={userRepo} />
        <Language
          LanguageRepo={userRepo}
          OrgsRepo={userOrgs}
          userInfo={userInfo}
        />

      </div>
    </div>
    <ModalPage/>
    </>
  );
};

export default User;
