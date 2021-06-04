import { Route, Switch } from "react-router-dom";

import Index from "./Components/Index/Index";
import User from "./Components/User/User";
import React, { useEffect, useState } from "react";
import NotFound from "./NotFound";
import ReactGA from "react-ga";

import { UserContext } from "./context/UserContext";
ReactGA.initialize(process.env.REACT_APP_GOOGLE_GA);
function App() {
  const [error, setError] = useState("");
  const [lastSearchText, setlastSearchText] = useState({ username: "" });
  useEffect(() => {
    //to report page view (sayfa görünümünü bildirmek için)
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <UserContext.Provider
      value={{ error, setError, lastSearchText, setlastSearchText }}
    >
      <Switch>
        <Route path="/" exact component={Index} />

        <Route path="/:Username" component={User} />

        <Route component={NotFound} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
