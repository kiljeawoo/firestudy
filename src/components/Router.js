import React,{useState} from 'react';
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "../routes/Profile";

const AppRouter = ({isLoggedIn}) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    return(
      <Router>
          {isLoggedIn && (<Navigation />) }
          <Switch>
              {
                  isLoggedIn ?(
                  <>
                      <Route path={"/"} exact={true}>
                        <Home />
                      </Route>
                      <Route path={"/profile"} exact={true}>
                          <Profile />
                      </Route>
                  </>)
                  :
                  (<Route>
                      <Auth path={"/"} exact={true}/>
                  </Route>)
              }
          </Switch>
      </Router>
    );
}

export default AppRouter;
