import React, {useState} from "react";
import NaviLog from "../../Home/HomeHeader/Navi&Log";
import Ornament from "../../../assets/Decoration.svg";

const LogOut = () => {


    return (
        <>
            <NaviLog/>
            <section className={`zaloguj wyloguj`}>
                <div className={`logContent`}>
                    <div className={`logHeader`}>
                        <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                        <img src={Ornament} className={`ornament`}></img>
                    </div>
                            <button>Strona główna</button>
                </div>
            </section>
        </>
    )
}
export default LogOut