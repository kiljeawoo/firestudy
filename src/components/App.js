import AppRouter from "./Router";
import React,{useState} from "react";
import firebase from "../firebase";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
