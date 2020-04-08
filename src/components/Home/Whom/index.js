import React, {useState} from "react";
import Ornament from "../../../assets/Decoration.svg";
import Fundacje from "./Fundacje";

const Whom = ()=>{
    const [komu, setKomu]=useState(`fundacje`);
    const clickF=()=>{
        setKomu(`fundacje`)
    };
    const clickN=()=>{
        setKomu(`NGO`)
    };
    const clickL=()=>{
        setKomu(`Lokal`)
    };
    return(
        <section name={`whom`} className={`whom`}>
        <div className={`whomHeader`}>
            <h1>Komu pomagamy?</h1>
            <img src={Ornament} className={`ornament`}></img>
        </div>
        <div className={`whomButtons`}>
            <button onClick={clickF} className={`whomButton`}>
                Fundacjom
            </button>
            <button onClick={clickN} className={`whomButton`}>
                <p>Organizacjom</p> <p>pozarządowym</p>
            </button>
            <button onClick={clickL} className={`whomButton`}>
                <p>Lokalnym</p> <p>zbiórkom</p>
            </button>

        </div>
            {komu===`fundacje` && <Fundacje/>}
        </section>
    )
}
export default Whom;