import { Route, Switch } from "react-router-dom";
import Index from "./Components/Index/Index";
import User from "./Components/User/User";
import React,{ useState,useEffect } from "react";
import { UserContext } from "./context/UserContext";
import NotFound from "./NotFound";
import ReactGa from "react-ga";

function App() {
  useEffect(() =>{
    ReactGa.initialize('G-C31FT8T36M')

    //to report page view (sayfa görünümünü bildirmek için)
    ReactGa.pageview(window.location.pathname + window.location.search)
  },[])
  const [userName, setUserName] = useState();
  

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path={`/${userName}`} component={User} />
        <Route component={NotFound} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
