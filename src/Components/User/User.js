import UserHeader from "./UserHeader";
import UserBody from "./UserBody";
import Language from "./Language";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const User = () => {
  const { userName } = useContext(UserContext);

  const [userInfo, setUserInfo] = useState([]);
  const [userRepo, setUserRepo] = useState([]);
  const [userOrgs, setuserOrgs] = useState([]);
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => setUserInfo(data));
  }, [userName]);

  
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => response.json())
      .then((data) => setUserRepo(data));
  }, [userName]);
    //   eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
      await fetch(`https://api.github.com/users/${userName}/orgs`)
        .then((response) => response.json())
        .then((data) => setuserOrgs(data));
    }, [userName]);
  return (
    <div className="uk-container uk-padding">
    <div className="uk-card uk-card-default">
      <UserHeader userInfo={userInfo}/>
      <UserBody userRepo={userRepo}/>
      <Language userRepo={userRepo} userOrgs={userOrgs} userInfo={userInfo}/>
    </div>
    </div>
  );
};

export default User;
