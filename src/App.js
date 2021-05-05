import { Route, Switch } from "react-router-dom";

import Index from "./Components/Index/Index";
import User from "./Components/User/User";
import React, { useEffect } from "react";
import NotFound from "./NotFound";
import ReactGA from "react-ga";

import { QueryClient, QueryClientProvider } from "react-query";
ReactGA.initialize(process.env.REACT_APP_GOOGLE_GA);
const queryClient = new QueryClient();
function App() {
  useEffect(() => {
    //to report page view (sayfa görünümünü bildirmek için)
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" exact component={Index} />

        <Route path="/:Username" component={User} />

        <Route component={NotFound} />
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
