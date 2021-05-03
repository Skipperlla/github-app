import { Route, Switch } from "react-router-dom";
import Index from "./Components/Index/Index";
import User from "./Components/User/User";
import { useState } from "react";
import { UserContext } from "./context/UserContext";
import NotFound from "./NotFound";

function App() {
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
