import React from "react";
import People from "../../../assets/People.jpg";
import Ornament from "../../../assets/Decoration.svg";
import Podpis from "../../../assets/Signature.svg";

const About = ()=>{
    return(
        <section name={`about`} className={'about'}>
            <div className={`content`}>
                <h1>O nas</h1>
                <img src={Ornament} className={`ornament`}></img>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className={`podpis`}>  <img src={Podpis} className={`icon`}></img></div>
            </div>

            <img src={People} className={'people'}></img>

            </section>
    )
};
export default About;