import React,{useState} from 'react';
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({isLoggedIn}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    return(
      <Router>
          <Switch>
              {isLoggedIn ?
                  <>
                      <Route path={"/"} exact={true}>
                        <Home />
                      </Route>
                  </>
                  :
                  <Route>
                      <Auth path={"/"} exact={true}/>
                  </Route>}
          </Switch>
      </Router>
    );
}

export default AppRouter;
