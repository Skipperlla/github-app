import { Route, Switch } from "react-router-dom";
import Index from "./Components/Index/Index";
import User from "./Components/User/User";
import React, { useEffect } from "react";
import NotFound from "./NotFound";
import ReactGA from "react-ga";
ReactGA.initialize("G-C31FT8T36M");
function App() {
  useEffect(() => {
    //to report page view (sayfa görünümünü bildirmek için)
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/:Username" component={User} />

        <Route component={NotFound} />
      </Switch>
  );
}

export default App;
