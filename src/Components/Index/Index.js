import CardBodyForm from "./CardBodyForm";
import CardBodyPreview from "./CardBodyPreview";
import CardBodyHeader from "./CardBodyHeader.js";
import LatestUpdates from "./LatestUpdates.js";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const Index = () => {
  const { userName } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState([]);

  //   eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => setUserInfo(data));
  }, [userName]);
  return (
    <div className="uk-container uk-padding">
      <div className="uk-card uk-card-default">
        <CardBodyHeader />
        <div className="uk-card-body">
          <div className="uk-grid uk-grid-divider uk-flex" uk-grid="true">
            <CardBodyForm userInfo={userInfo} />
            <CardBodyPreview />
            <LatestUpdates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
