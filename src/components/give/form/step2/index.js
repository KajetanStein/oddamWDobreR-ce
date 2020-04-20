import React, {useState} from "react";

const Step2 = (props) => {
    const [number, setNumber]=useState(props.value);
    const usenumber=(e)=>{
      setNumber(e.target.value)
    };
    const dalej=(e)=>{
        if(number>0) {
            props.set(`number`, number);

            props.dalej();
        }
    };
    const wstecz=(e)=>{
        e.preventDefault();
        props.wstecz();

    };
    return (
        <>
            <div className={`formAlert`}>
                <h2>Ważne!</h2>
                <p>Wszytskie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz <span>TUTAJ</span>.</p>
            </div>
            <div className={`formContent step2`}>
                <div className={`formMain`}>
                <div className={`formHeader`}>
                    Krok 2/4
                </div>
                <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                <div>
                    <div className={`customSelect`}>
                        <label for={`number`}>Liczba 60l worków:</label>
                        <select id={`number`} value={number} onChange={usenumber} name={`howMuch`}>
                            <option>--wybierz-- </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>
                <div className={`formButtons`}>
                    <button onClick={wstecz} className={`dalej`}>Wstecz</button>
                    <button onClick={dalej} className={`dalej`}>Dalej</button>
                </div>
            </div>
        </>
    )
};
export default Step2;