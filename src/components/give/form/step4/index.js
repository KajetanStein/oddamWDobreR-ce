import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import TimePicker from 'react-time-picker';
import moment from 'moment';
// import { extendMoment } from 'moment-range';
import Calendar from "react-input-calendar"


const Step3 = (props) => {
    const history = useHistory();
    const [dane, setDane] = useState(props.value);
    const vali = {
        street: (x) => x.length >= 2,
        city: (x) => x.length >= 2,
        code: (x) => x.match(/^\d\d-\d\d\d$/),
        phone: (x) => x.match(/^\d\d\d\d\d\d\d\d\d$/),
        hour: (x) => true,
        date: (x) => true

}
    ;
    const [errors, setErrors] = useState({
        street: false,
        city: false,
        code: false,
        phone: false,
    });

    // useEffect(() => {
    //     Object.keys(checked).forEach((el) => {
    //         if (!props.value.whom.indexOf(el)) {
    //             setChecked({...checked, [el]: true})
    //         }
    //     })
    // }, [props]);

    const change = (e) => {
        setDane({...dane, [e.target.name]: e.target.value});
        if (vali[e.target.name](e.target.value)) {

            setErrors({...errors, [e.target.name]: false})
        } else {
            setErrors({...errors, [e.target.name]: true})
        }
    };

    const dalej = (e) => {
        e.preventDefault();
        console.log(props.value);
        if (!errors.street & !errors.city & !errors.code & !errors.phone) {
            props.set(`address`, dane);
            history.push("/oddaj/summary")
        }
    };
    const wstecz = (e) => {
        e.preventDefault();
        history.push("/oddaj/krok3")
    };

    return (
        <>
            <div className={`formAlert`}>
                <h2>Ważne!</h2>
                <p>Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <form>
                <div className={`formContent step4`}>
                    <div className={`formMain`}>
                        <div className={`formHeader`}>
                            Krok 4/4
                        </div>
                        <h2>Podaj adres oraz termin odbioru rzeczy:</h2>
                        <div className={`forms`}>
                            <form>
                                <h4>Adres odbioru:</h4>
                                <div>
                                    <label>Ulica</label><input value={dane.street} onChange={change} name={`street`} type={`text`}/>
                                </div>
                                {errors.street && <div className={`error`}>Nazwa jest za krótka</div>}
                                <div>
                                    <label>Miasto</label><input onChange={change} name={`city`} type={`text`}/>
                                </div>
                                {errors.city && <div className={`error`}>Nazwa jest za krótka</div>}
                                <div>
                                    <label>Kod Pocztowy</label><input onChange={change} name={`code`} type={`text`}/>
                                </div>
                                {errors.code && <div className={`error`}>Nieprawidłowy format</div>}
                                <div>
                                    <label>Numer telefonu</label><input onChange={change} name={`phone`} type={`text`}/>
                                </div>
                                {errors.phone && <div className={`error`}>Nieprawidłowy format</div>}
                            </form>
                            <form>
                                <h4>Termin odbioru:</h4>
                                <div><label>Data</label><input onChange={change} name={`date`} type={`text`}/></div>
                                {/*<div><label>Data</label><Calendar/></div>*/}
                                <div><label>Godzina</label><input onChange={change} name={`hour`} type={`text`}/></div>
                                {/*<div><label>Godzina</label><TimePicker/></div>*/}
                                <div><label>Uwagi dla kuriera</label><textarea onChange={change} name={`note`}/></div>
                            </form>
                        </div>
                    </div>
                    < div className={`formButtons`}>
                        <button onClick={wstecz} className={`dalej`}>Wstecz</button>
                        <button onClick={dalej} className={`dalej`}>Dalej</button>
                    </div>

                </div>
            </form>
        </>
    )
};
export default Step3;