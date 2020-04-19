import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Icon1 from "../../../../assets/Icon-1.svg";
import Icon4 from "../../../../assets/Icon-4.svg";
import TimePicker from 'react-time-picker';
// import Moment as moment from 'moment';
// import { extendMoment } from 'moment-range';
// import Calendar from "react-input-calendar"


const Summary = (props) => {
    const history = useHistory();
    const [dane, setDane]=useState(props.value);
    const vali = {
        street: (x) => x.length >= 2,
        city: (x) => x.length >= 2,
        code: (x) => x.match(/^\d\d-\d\d\d$/),
        phone: (x) => x.match(/^\d\d\d\d\d\d\d\d\d$/),
    };
    const [errors, setErrors] = useState({
        street: false,
        city: false,
        code: false,
        phone: false,
    });
console.log(props.value);

const change = (e) => {
        if (vali[e.target.name](e.target.value)) {
            setDane({...dane, [e.target.name]: e.target.value})
            setErrors({...errors, [e.target.name]: false})
        }
        else{
            console.log(e.target.value);
            setErrors({...errors, [e.target.name]: true})
        }
    };

    const dalej = (e) => {
        e.preventDefault();
        //POST
        history.push("/oddaj/thanks")};
    const wstecz = (e) => {
        e.preventDefault();
        history.push("/oddaj/krok4")
    };

    return (
        <>
            <form>
                <div className={`formContent step3`}>
                    <div className={`formMain`}>
                        <h2>Podasumowanie Twojej darowizny:</h2>
                        <div className={`summary`}>
                            <div><img src={Icon1}/>{props.value.number} worki, {props.value.type}, {props.value.what.whom}</div>
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
                                <div><label>Data</label><div>{props.value.address.date}</div></div>
                                <div><label>Godzina</label><div>{props.value.address.hour}</div></div>
                                {/*<div><label>Godzina</label><TimePicker/></div>*/}
                                <div><label>Uwagi dla kuriera</label><div>{props.value.address.note}</div></div>
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