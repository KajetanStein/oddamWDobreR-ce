import React from "react";
import Main from "./main";
import NaviLog from "../../Home/HomeHeader/Navi&Log";
const HomeHeader = ()=>{

    return(
        <>
        <div className={`giveHeader`}>
           <NaviLog/>
            <Main/>
        </div>
            </>
    )
};
export default HomeHeader;