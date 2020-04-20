import React, {useState} from "react";
import HomeHeader from "./Giveheader";
import Contact from "../Home/Contact";
import Step1 from "./form/step1";
import Step2 from "./form/step2";
import Step3 from "./form/step3";
import Step4 from "./form/step4";
import Summary from "./form/summary"
import Thanks from "./form/thanks";


const Give = () => {
    const [dane, setDane] = useState({
        type: ``,
        number: 0,
        what: {whom: [], local: ``, spec: ``},
        address: {street: ``, city: ``, code: ``, phone: ``, date: ``, hour: ``, note: ``}
    });
    const [page, setPage] = useState(1);
    const dalej = () => {
        setPage((prevState => prevState + 1))
    };
    const wstecz = () => {
        setPage((prevState => prevState - 1))
    };
    const set = (x, y) => {
        setDane({...dane, [x]: y})
    };
    const zero = () => {
        setDane({
            type: ``,
            number: 0,
            what: {whom: [], local: ``, spec: ``},
            address: {street: ``, city: ``, code: ``, phone: ``, date: ``, hour: ``, note: ``}
        })
    };
    const [checked, setChecked] = useState({
        dzieciom: false,
        samotnym_matkom: false,
        bezdomnym: false,
        niepełnosprawnym: false,
        osobom_starszym: false,
    });
    const checking = (x) => {
        setChecked(x)
    };

    return (
        <>

            <HomeHeader/>
            {page === 1 && <Step1 value={dane.type} set={set} dalej={dalej} wstecz={wstecz}/>}
            {page === 2 && <Step2 value={dane.number} set={set} dalej={dalej} wstecz={wstecz}/>}
            {page === 3 &&
            <Step3 value={dane.what} set={set} checked={checked} checking={checking} dalej={dalej} wstecz={wstecz}/>}
            {page === 4 && <Step4 value={dane.address} set={set} dalej={dalej} wstecz={wstecz}/>}
            {page === 5 && <Summary value={dane} set={zero} dalej={dalej} wstecz={wstecz}/>}
            {page === 6 && <Thanks/>}

            <Contact/>
        </>
    )
};

export default Give;