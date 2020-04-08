import React from "react";
import {Link} from "react-scroll";

const NaviLog = ()=>{
    return (
        <header>
        <div className={'log'}>
            <a href={`#`} className={'logIn'}>Zaloguj</a>
            <a href={`#`} className={'signUp'}>Załóż konto</a>
        </div>
        <ul className={'nav'}>
            <li><Link to={`#`}>Start</Link></li>
            <li><Link to={"steps"} smooth={true}>O co chodzi?</Link></li>
            <li><Link to={`about`} smooth={true}>O nas</Link></li>
            <li><Link to={`whom`} smooth={true}>Fundacje i organizacje</Link></li>
            <li><Link to={`contact`} smooth={true}>Kontakt</Link></li>
        </ul>
             </header>
    )
};
export default NaviLog