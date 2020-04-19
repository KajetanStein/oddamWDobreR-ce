import React, {useState} from "react";
import {useHistory} from "react-router-dom";
const Step1 = (props) => {
    const history = useHistory();
    const [what, setWhat]=useState(props.value);

    const submit=(e)=>{
        setWhat(e.target.value);
    };
    const dalej=(e)=>{
        e.preventDefault();
        if(what.length>0) {
            props.set(`type`, what);
            history.push("/oddaj/krok2")
        }
    };
    return (
        <>

            <div className={`formAlert`}>
                <h2>Ważne!</h2>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy.Dzięki temu będziemy wiedzieć komu najlepiej je
                    przekazać.</p>
            </div>
            <form onChange={submit}>
            <div className={`formContent step1`}>
                <div className={`formMain`}>
                    <div className={`formHeader`}>
                        Krok 1/4
                    </div>
                    <h2>Zaznacz co chcesz oddać:</h2>

                        <div>
                            <input checked={what === "Ubrania, które nadają się do ponownego użycia"} id={`clothesGood`} name={`what`} type={`radio`}
                                   value={`Ubrania, które nadają się do ponownego użycia`}/>
                            <label for={`clothesGood`}><span className={`checkbox`}></span>Ubrania, które nadają się do
                                ponownego użycia</label>

                        </div>
                        <div>

                            <input checked={what === "Ubrania do wyrzucenia"} id={`clothesBad`} name={`what`} type={`radio`} value={`Ubrania do wyrzucenia`}/>
                            <label
                                for={`clothesBad`}> <span className={`checkbox`}></span>Ubrania do wyrzucenia</label>
                        </div>
                        <div>

                            <input checked={what === "zabawki"} id={`toys`} name={`what`} type={`radio`} value={`zabawki`}/> <label
                            for={`toys`}> <span className={`checkbox`}></span>Zabawki</label>
                        </div>
                        <div>

                            <input checked={what === "książki"} id={`books`} name={`what`} type={`radio`} value={`książki`}/> <label
                            for={`books`}><span className={`checkbox`}></span>Książki</label>
                        </div>
                        <div>

                            <input checked={what === "inne"} id={`other`} name={`what`} type={`radio`} value={`inne`}/> <label
                            for={`other`}> <span htmlFor={`other`} className={`checkbox`}></span>Inne</label>
                        </div>
                </div>
                <div className={`formButtons`}>
                    <button onClick={dalej} className={`dalej`}>Dalej</button>
                </div>

            </div>
            </form>
        </>
    )
};
export default Step1;