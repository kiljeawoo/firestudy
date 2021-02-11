import AppRouter from "./Router";
import React,{useState, useEffect} from "react";
import {authService} from "fbase";


function App() {
    console.log(authService.currentUser);
    const [init, setInit]=useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user) =>{
        if(user) {
            setIsLoggedIn(true);
            // setInit(true);
        }else{
            setIsLoggedIn(false);
        }
        setInit(true);
      });

  },[]);
  return (
      <>
          {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..." }
        <footer>&copy;
          firestudy {new Date().getFullYear()}
        </footer>
      </>
  );
}

export default App;
