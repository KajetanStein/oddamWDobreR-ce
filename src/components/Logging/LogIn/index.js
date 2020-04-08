import React from "react";
import NaviLog from "../../Home/HomeHeader/Navi&Log";
import Ornament from "../../../assets/Decoration.svg";

const LogIn=()=>{
    return(
        <>
            <NaviLog/>
            <section className={`zaloguj`}>
                <div className={`logContent`}>
                    <div className={`logHeader`}>
                        <h1>Zaloguj się</h1>
                        <img src={Ornament} className={`ornament`}></img>
                    </div>
                    <form>
                        <div className={`logEmail`}>
                        <label>Email</label>
                        <input name={`email`}  type={`email`}/>
                            {/*{errors.email && <div className={`error`}>Nieprawidłowy format adresu email</div>}*/}
                    </div>
                        <div className={`logPassword`}>
                            <label>Hasło</label>
                            <input name={`name`} type={`password`}/>
                            {/*{errors.name && <div className={`error`}>Imię musi być jednym wyrazem</div>}*/}
                        </div>
                    </form>
                </div>
                <div className={`logButtons`}>
                    <button>Załóż konto</button>
                    <button>Zaloguj</button>
                </div>
            </section>
            </>
    )
}
export default LogIn