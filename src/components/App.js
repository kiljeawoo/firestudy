import AppRouter from "./Router";
import React,{useState} from "react";
import {authService} from "fbase";


function App() {
    console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
      <>
        <AppRouter isLoggedIn={isLoggedIn}/>
        <footer>&copy;
          firestudy {new Date().getFullYear()}
        </footer>
      </>
  );
}

export default App;
