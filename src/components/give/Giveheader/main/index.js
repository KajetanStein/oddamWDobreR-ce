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
                    <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                    <img src={Ornament} className={`ornament`}></img>
                </div>
                <div className={`mainGive`}>
                  <div className={`title`}>Wystarczą 4 proste kroki:</div>
                        <div className={`karos`}>
                    <div className={`karo`}>
                        <div>Wybierz rzeczy</div>
                    </div>
                    <div className={`karo`}>
                        <div>Spakuj je w worki</div>
                    </div>
                    <div className={`karo`}>
                        <div>Wybierz fundację</div>
                    </div>
                    <div className={`karo`}>
                        <div>Zamów kuriera</div>
                    </div>
                    </div>
                </div>
            </container>
        </main>
    )
};
export default Main;