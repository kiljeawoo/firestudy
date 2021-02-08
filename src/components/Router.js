import React from 'react';
import{BrowserRouter as Router} from "react-router-dom";

export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    return(
      <Router>
          <Switch>
              {isLoggedIn ?}
          </Switch>
      </Router>
    );
}
