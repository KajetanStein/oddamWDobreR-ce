import React, {useState} from "react";
import HomeHeader from "./Giveheader";
import Contact from "../Home/Contact";
import Step1 from "./form/step1";
import Step2 from "./form/step2";
import Step3 from "./form/step3";
import Step4 from "./form/step4";
import Summary from "./form/summary"
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    Scroll,
    useHistory
} from 'react-router-dom';
import Thanks from "./form/thanks";



const Give = () => {
    const [dane, setDane] = useState({
        type: `zabawki`,
        number: 0,
        what: { whom: [], local: ``, spec:``},
        address: {street: ``, city: ``, code: ``, phone: ``, date: ``,hour:``,note:``}
    });
    const set=(x,y)=>{
      setDane({...dane, [x]:y })
};

    return (
        <>
            {console.log(dane)}
            <HomeHeader/>
            <HashRouter>
                <Route exact path={`/oddaj`}>
            <Step1 value={dane.type} set={set}/>
                </Route>
                <Route path={`/oddaj/krok2`}>
                <Step2 value={dane.number} set={set}/>
            </Route>
                <Route path={`/oddaj/krok3`}>
                    <Step3 value={dane.what} set={set}/>
                </Route>
                <Route path={`/oddaj/krok4`}>
                <Step4 value={dane.address} set={set}/>
            </Route>
                <Route path={`/oddaj/summary`}>
                    <Summary value={dane} />
                </Route>
                <Route path={`/oddaj/thanks`}>
                <Thanks/>
                </Route>
            </HashRouter>
            <Contact/>
        </>
    )
};

export default Give;