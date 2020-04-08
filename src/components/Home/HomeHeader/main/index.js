import React from "react";
import Ornament from "../../../../assets/Decoration.svg";

const Main = () => {
    return (
        <main>
            <container>
                <div className={`mainTitle`}>
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Ornament} className={`ornament`}></img>
                </div>
                <div className={`mainButtons`}>
                    <button className={`buttonBig`}><p>Oddaj</p> <p>rzeczy</p></button>
                    <button className={`buttonBig`}><p>Zorganizuj</p> <p>zbiórkę</p></button>
                </div>
            </container>
        </main>
    )
};
export default Main;