import React from "react";
import NaviLog from "./Navi&Log";
import Main from "./main";
const HomeHeader = ()=>{

    return(
        <div className={`start`}>
        <NaviLog/>
        <Main/>
        </div>
    )
};
export default HomeHeader;