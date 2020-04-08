import React from "react";
import HomeHeader from "./HomeHeader";
import TriCol from "./TriCol"
import Steps from "./steps";
import About from "./About";
import Whom from "./Whom";
import Contact from "./Contact";

const Home= ()=>{
    return(
        <>
      <HomeHeader/>
      <TriCol/>
      <Steps/>
      <About/>
      <Whom/>
      <Contact/>
      </>
    )
};

export default Home;