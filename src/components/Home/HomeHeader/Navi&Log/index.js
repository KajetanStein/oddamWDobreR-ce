import React from "react";
import {Link} from "react-scroll";
import {Link as LINK} from "react-router-dom"

const NaviLog = ()=>{
    return (
        <header>
        <div className={'log'}>
            <LINK to={`/zaloguj`} className={'logIn'}>Zaloguj</LINK>
            <LINK to={`/rejestracja`} className={'signUp'}>Załóż konto</LINK>
        </div>
        <ul className={'nav'}>
            <li><LINK to={`/`}>Start</LINK></li>
            <li><Link to={"steps"} smooth={true}>O co chodzi?</Link></li>
            <li><Link to={`about`} smooth={true}>O nas</Link></li>
            <li><Link to={`whom`} smooth={true}>Fundacje i organizacje</Link></li>
            <li><Link to={`contact`} smooth={true}>Kontakt</Link></li>
        </ul>
             </header>
    )
};
export default NaviLog