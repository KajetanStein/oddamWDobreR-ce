import React, {useEffect, useState} from "react";



const Step3 = (props) => {

    const [dane, setDane] = useState(props.value);
    const vali = {
            street: (x) => x.length >= 2,
            city: (x) => x.length >= 2,
            code: (x) => x.match(/^\d\d-\d\d\d$/),
            phone: (x) => x.match(/^\d\d\d\d\d\d\d\d\d$/),
            hour: (x) => true,
            date: (x) => true,
            note: (x) => true,
        };
    const [errors, setErrors] = useState({
        street: false,
        city: false,
        code: false,
        phone: false,
        length: false,
        date: false,
        hour: false,
    });



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
        if (!errors.street && !errors.city && !errors.code && !errors.phone && !errors.date && !errors.hour) {
            if (dane.street.length * dane.city.length * dane.code.length * dane.phone.length *dane.hour.length * dane.date.length === 0)
                setErrors({...errors, length: true});
            else {
                props.set(`address`, dane);
                props.dalej();
            }
        }
    };
    const wstecz = (e) => {
        e.preventDefault();
        props.wstecz();
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
                                    <label>Ulica*</label><input value={dane.street} onChange={change} name={`street`}
                                                                type={`text`}/>
                                </div>
                                {errors.street && <div className={`error`}>Nazwa jest za krótka</div>}
                                <div>
                                    <label>Miasto*</label><input value={dane.city} onChange={change} name={`city`}
                                                                 type={`text`}/>
                                </div>
                                {errors.city && <div className={`error`}>Nazwa jest za krótka</div>}
                                <div>
                                    <label>Kod Pocztowy*</label><input value={dane.code} onChange={change} name={`code`}
                                                                       type={`text`}/>
                                </div>
                                {errors.code && <div className={`error`}>Nieprawidłowy format</div>}
                                <div>
                                    <label>Numer telefonu*</label><input value={dane.phone} onChange={change}
                                                                         name={`phone`} type={`text`}/>
                                </div>
                                {errors.phone && <div className={`error`}>Nieprawidłowy format</div>}
                            </form>
                            <form>
                                <h4>Termin odbioru:</h4>
                                <div><label>Data*</label><input value={dane.date} onChange={change} name={`date`} type={`date`}/></div>
                                {/*<div><label>Data*</label><Calendar value={dane.date} name={`date`} onChange={change} placeholder={`DD/MM/YYYY`} format='DD/MM/YYYY' /></div>*/}
                                {/*<div><label>Data*</label><DatePicker onChange={change} name={`hour`} type={`date`}/></div>*/}
                                {errors.date && <div className={`error`}>Nieprawidłowy format</div>}
                                <div><label>Godzina*</label><input value={dane.hour} onChange={change} name={`hour`} type={`time`}/></div>
                                {/*<div><label>Godzina</label><TimePicker value={dane.hour} name={`hour`} onChange={change} disableClock={true} clearIcon={null}/></div>*/}
                                {errors.hour && <div className={`error`}>Nieprawidłowy format</div>}
                                <div><label>Uwagi dla kuriera</label><textarea value={dane.note} onChange={change}
                                                                               name={`note`}/></div>
                            </form>
                        </div>
                    </div>
                    < div className={`formButtons`}>
                        {errors.length && <h2 className={`error`}>Uzupełnij wymagane pola</h2>}
                        <button onClick={wstecz} className={`dalej`}>Wstecz</button>
                        <button onClick={dalej} className={`dalej`}>Dalej</button>
                    </div>

                </div>
            </form>
        </>
    )
};
export default Step3;