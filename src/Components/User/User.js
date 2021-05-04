/* eslint-disable no-unused-vars */
import UserHeader from "./UserHeader";
import UserBody from "./UserBody";
import Language from "./Language";
import { QueryClient, QueryClientProvider } from "react-query";
import { GetRepos, GetUser, GetOrgs } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const queryClient = new QueryClient();

const User = () => {
  const { Username } = useParams();

  const [userInfo, setuserInfo] = useState([]);
  const [userRepo, setuserRepo] = useState([]);
  const [userOrgs, setuserOrgs] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    GetUser(Username, setuserInfo);
    GetRepos(Username, setuserRepo);
    GetOrgs(Username, setuserOrgs);
  }, [Username]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="uk-container uk-padding">
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
    </QueryClientProvider>
  );
};

export default User;
