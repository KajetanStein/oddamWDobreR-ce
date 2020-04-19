import React from "react";
import Ornament from "../../../../assets/Decoration.svg";
import {useHistory} from "react-router-dom"

const Main = (props) => {
    const history = useHistory();
    const  navi = (url) => () => {
        history.push(url)
    };
    return (
        <main>
            <container>
                <div className={`mainTitle`}>
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={Ornament} className={`ornament`}></img>
                </div>
                <div className={`mainButtons`}>
                    <button onClick={navi(props.log ? '/' : '/zaloguj')} className={`buttonBig`}>Oddaj rzeczy</button>
                    <button onClick={navi(props.log ? '/' : '/zaloguj')} className={`buttonBig`}>Zorganizuj zbiórkę</button>
                </div>
            </container>
        </main>
    )
};
export default Main;