import React, {useState} from "react";


const Step3 = (props) => {
    const [dane, setDane] = useState(props.value)
    const [checked, setChecked] = useState(props.checked);




    const uselokal = (e) => {
        setDane({...dane, local: e.target.value})
    };
    const wpis = (e) => {
        setDane({...dane, spec: e.target.value})
    };
    const click = (e) => {
        if (!checked[e.target.name]) {
            setDane({...dane, whom: [...dane.whom, e.target.name]})
            setChecked({...checked, [e.target.name]: true});
        } else {
            let temp = dane.whom;
            temp.splice(dane.whom.indexOf(e.target.name), 1);
            setDane({...dane, whom: temp});
            setChecked({...checked, [e.target.name]: false});
        }

    };

    const dalej = (e) => {
        e.preventDefault();
        if ((dane.spec.length + dane.local.length) > 0 && dane.whom.length > 0) {
            props.set('what', dane);
            props.checking(checked);

            props.dalej();
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
                <p>Wszytskie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy
                    znajdziesz <span>TUTAJ</span>.</p>
            </div>
            <form>
                <div className={`formContent step3`}>
                    <div className={`formMain`}>
                        <div className={`formHeader`}>
                            Krok 3/4
                        </div>
                        <h2>Lokalizacja:</h2>
                        <div>
                            <div className={`customSelect`}>
                                <select value={dane.local} id={`lokal`} onChange={uselokal} name={`where`}>
                                    <option>--wybierz--</option>
                                    <option>Poznań</option>
                                    <option>Warszawa</option>
                                    <option>Kraków</option>
                                    <option>Wrocław</option>
                                    <option>Katowice</option>
                                </select>
                            </div>
                        </div>
                        <h4>Komu chcesz pomóc?</h4>
                        <div className={`checkboxBox`}>
                            <div>
                                <input onClick={click} type={`checkbox`} id={`kids`} name={`dzieciom`}
                                       checked={checked.dzieciom}/>
                                <label className={`labelKomu`} htmlFor={`kids`}>
                                    <div className={`checkbox`}>dzieciom</div>
                                </label>
                            </div>
                            <div>
                                <input onClick={click} type={`checkbox`} id={`mothers`} name={`samotnym_matkom`}
                                       checked={checked.samotnym_matkom}/>
                                <label className={`labelKomu`} htmlFor={`mothers`}>
                                    <div className={`checkbox`}>samotnym matkom</div>
                                </label>
                            </div>
                            <div>
                                <input onClick={click} type={`checkbox`} name={`bezdomnym`} id={`homeless`}
                                       checked={checked.bezdomnym}/>
                                <label className={`labelKomu`} htmlFor={`homeless`}>
                                    <div className={`checkbox`}>bezdomnym</div>
                                </label>
                            </div>
                            <div>
                                <input onClick={click} type={`checkbox`} name={`niepełnosprawnym`} id={`handycaps`}
                                       checked={checked.niepełnosprawnym}/>
                                <label className={`labelKomu`} htmlFor={`handycaps`}>
                                    <div className={`checkbox`}>niepełnosprawnym</div>
                                </label>
                            </div>
                            <div>
                                <input onClick={click} type={`checkbox`} name={`osobom_starszym`} id={`senior`}
                                       checked={checked.osobom_starszym}/>
                                <label className={`labelKomu`} htmlFor={`senior`}>
                                    <div className={`checkbox`}>osobom starszym</div>
                                </label>
                            </div>
                        </div>
                        <h4>Wpisz nazwę konkretnej organizacji (opcjonalne)</h4>
                        <input onChange={wpis}  value={dane.spec} className={`inputText`} type={`text`}/>
                    </div>
                    <div className={`formButtons`}>
                        <button onClick={wstecz} className={`dalej`}>Wstecz</button>
                        <button onClick={dalej} className={`dalej`}>Dalej</button>
                    </div>
                </div>
            </form>
        </>
    )
};
export default Step3;