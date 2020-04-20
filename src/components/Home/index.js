import React, {useState} from "react";
import HomeHeader from "./HomeHeader";
import TriCol from "./TriCol"
import Steps from "./steps";
import About from "./About";
import Whom from "./Whom";
import Contact from "./Contact";

const Home= ()=>{
    const [log, setLog]=useState(true);
    const logIn=()=>{
        setLog(true)
    };
    const logOut=()=>{
        setLog(false)
    };
    return(
        <>
      <HomeHeader log={log}  logIn={logIn} logOut={logOut}/>
      <TriCol log={log} logIn={logIn} logOut={logOut}/>
      <Steps log={log} logIn={logIn} logOut={logOut}/>
      <About log={log} logIn={logIn} logOut={logOut}/>
      <Whom log={log} logIn={logIn} logOut={logOut}/>
      <Contact log={log} logIn={logIn} logOut={logOut}/>
      </>
    )
};

export default Home;