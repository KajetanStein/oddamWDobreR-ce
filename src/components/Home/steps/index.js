import React from "react";
import Ornament from "../../../assets/Decoration.svg";
import Icon1 from "../../../assets/Icon-1.svg";
import Icon2 from "../../../assets/Icon-2.svg";
import Icon3 from "../../../assets/Icon-3.svg";
import Icon4 from "../../../assets/Icon-4.svg";
import {useHistory} from "react-router-dom";

const Steps = (props) => {
    const history = useHistory();
    const  navi = (url) => () => {
        history.push(url)
    };
    return (
        <section name={`steps`} className={`steps`}>
            <div className={`stepsHeader`}>
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={Ornament} className={`ornament`}></img>
            </div>
            <div className={`stepsMain`}>
                <div className={`step`}>
                <img src={Icon1} className={`icon`}></img>
                <h3>Wybierz rzeczy</h3>
                <div className={`kreska`}></div>
                <p>ubrania, zabawki, sprzęt i inne</p>
            </div>
                <div className={`step`}>
                    <img src={Icon2} className={`icon`}></img>
                    <h3>Spakuj je</h3>
                    <div className={`kreska`}></div>
                    <p>Skorzystaj z worków na śmieci</p>
                </div>
                <div className={`step`}>
                    <img src={Icon3} className={`icon`}></img>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <div className={`kreska`}></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className={`step`}>
                    <img src={Icon4} className={`icon`}></img>
                    <h3>Zamów kuriera</h3>
                    <div className={`kreska`}></div>
                    <p>kurier przyjedzie w dogodnym terminie
                    </p>
                </div>
            </div>
            <div className={`stepsFooter`}>
               <button onClick={navi(props.log ? '/' : '/zaloguj')} className={`buttonBig`}><p>Oddaj</p> <p>rzeczy</p></button>
            </div>
        </section>
    )

};
export default Steps