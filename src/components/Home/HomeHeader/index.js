import React from "react";
import NaviLog from "./Navi&Log";
import Main from "./main";
const HomeHeader = (props)=>{

    return(
        <div className={`start`}>
        <NaviLog/>
        <Main log={props.log}  logIn={props.logIn} logOut={props.logOut}/>
        </div>
    )
};
export default HomeHeader;