import React, {useState} from "react";
import NaviLog from "../../Home/HomeHeader/Navi&Log";
import Ornament from "../../../assets/Decoration.svg";
import { useHistory } from 'react-router-dom';

const LogIn = () => {
    const history = useHistory();
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const [form, setForm] = useState({
       pass: ``,
        email: ``,
    });
    const [errors, setErrors] = useState({
        pass: false,
        email: false
    });

    const vali = {
        name: (x) => x.length>5,
        email: (x) => re.test(String(x).toLowerCase()),
    };


    const change = (e) => {
        if (vali[e.target.name](e.target.value)) {
            setForm({...form, [e.target.name]: e.target.value});
            setErrors({...errors, [e.target.name]: false})
        } else {
            setErrors({...errors, [e.target.name]: true})
        }
    };

   const  navi = (url) => () => {
       history.push(url)
   };

    return (
        <>
            <NaviLog/>
            <section className={`zaloguj`}>
                <div className={`logContent`}>
                    <div className={`logHeader`}>
                        <h1>Zaloguj się</h1>
                        <img src={Ornament} className={`ornament`}></img>
                    </div>
                    <form>
                        <div className={`form`}>
                        <div className={`logEmail`}>
                            <label>Email</label>
                            <input onChange={change} name={`email`} type={`email`}/>
                            {errors.email && <div className={`error`}>Nieprawidłowy format adresu email</div>}
                        </div>
                        <div className={`logPassword`}>
                            <label>Hasło</label>
                            <input onChange={change} name={`pass`} type={`password`}/>
                            {errors.pass && <div className={`error`}>Hasło musi mieć przynajmniej 6 znaków</div>}
                        </div>
                        </div>
                        <div className={`logButtons`}>
                            <button onClick={navi("/rejestracja")}>Załóż konto</button>
                            <button type="submit"> Zaloguj</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default LogIn