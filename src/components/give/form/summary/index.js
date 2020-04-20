import React, {useEffect, useState} from "react";

import Icon1 from "../../../../assets/Icon-1.svg";
import Icon4 from "../../../../assets/Icon-4.svg";



const Summary = (props) => {
    const dalej = (e) => {
        e.preventDefault();
        //POST
        props.set();
        props.dalej();
    };
    const wstecz = (e) => {

        props.wstecz();
    };
    let arr=[];
    if (props.value.what.whom!==undefined){
        arr=props.value.what.whom.map((x)=>x.split(`_`).join(` `))};
    return (
        <>
            <form>
                <div className={`formContent step3`}>
                    <div className={`formMain`}>
                        <h2>Podasumowanie Twojej darowizny:</h2>
                        <div className={`summary`}>
                            <div><img src={Icon1}/>{props.value.number}
                            {props.value.number==1 && ` worek, `}
                            {props.value.number>1 && props.value.number<5 && ` worki, `}
                            {props.value.number>4 && ` worków, `}
                            {props.value.type}, {arr.join(`, `)}</div>
                            <div><img src={Icon4}/>dla lokalizacji:{props.value.what.local}</div>
                        </div>
                        <div className={`forms`}>
                            <form>
                                <h4>Adres odbioru:</h4>
                                <div>
                                    <label>Ulica</label><div className={`inputSummary`}>{props.value.address.street}</div>
                                </div>
                                <div>
                                    <label>Miasto</label><div className={`inputSummary`}>{props.value.address.city}</div>
                                </div>
                                <div>
                                    <label>Kod Pocztowy</label><div className={`inputSummary`}>{props.value.address.code}</div>
                                </div>
                                <div>
                                    <label>Numer telefonu</label><div className={`inputSummary`}>{props.value.address.phone}</div>
                                </div>
                            </form>
                            <form>
                                <h4>Termin odbioru:</h4>
                                <div><label>Data</label><div className={`inputSummary`}>{props.value.address.date}</div></div>
                                <div><label>Godzina</label><div className={`inputSummary`}>{props.value.address.hour}</div></div>
                                {/*<div><label>Godzina</label><TimePicker/></div>*/}
                                <div><label>Uwagi dla kuriera</label><div className={`inputSummary`}>{props.value.address.note}</div></div>
                            </form>
                        </div>
                    </div>
                    < div className={`formButtons`}>
                        <button onClick={wstecz} className={`dalej`}>Wstecz</button>
                        <button onClick={dalej} className={`dalej`}>Potwierdzam</button>
                    </div>

                </div>
            </form>
        </>
    )
};
export default Summary;