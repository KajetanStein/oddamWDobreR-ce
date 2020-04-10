import React, {useState} from "react";
import Ornament from "../../../assets/Decoration.svg";
import Icon1 from "../../../assets/Facebook.svg";
import Icon2 from "../../../assets/Instagram.svg";


const Contact = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const [form, setForm] = useState({
        name: ``,
        email: ``,
        message: ``
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });
    const vali = {
        name: (x) => x.indexOf(' ') < 0,
        email: (x) => re.test(String(x).toLowerCase()),
        message: (x) => x.length >= 120
    };


    const change = (e) => {
        if (vali[e.target.name](e.target.value)) {
            setForm({...form, [e.target.name]: e.target.value});
            setErrors({...errors, [e.target.name]: false})
        } else {
            setErrors({...errors, [e.target.name]: true})
        }
    };

    const click = (e) => {
        e.preventDefault();
        if (!errors.name & !errors.email & !errors.message & form.name.length & form.email.length & form.message.length) {
            fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(function (res) {
                    console.log(res)
                })
            // }
            setForm({
                name: ``,
                email: ``,
                message: ``

            })
        }
        };


        return (
            <section name={`contact`} className={`contact`}>
                <div className={`blur`}></div>
                <div className={`contactContent`}>
                    <div className={`contactHeader`}>
                        <h1>Skontaktuj się z nami</h1>
                        <img src={Ornament} className={`ornament`}></img>
                    </div>
                    <form onSubmit={click}>
                        <div className={`upper`}>
                            <div className={`enterName`}>
                                <label>Wpisz swoje imię</label>
                                <input name={`name`} onChange={change} placeholder={`Krzysztof`} type={`text`}/>
                                {errors.name && <div className={`error`}>Imię musi być jednym wyrazem</div>}
                            </div>
                            <div className={`enterName`}>
                                <label>Wpisz swój email</label>
                                <input onChange={change} name={`email`} placeholder={`abc@wyz.pl`} type={`text`}/>
                                {errors.email && <div className={`error`}>Nieprawidłowy format adresu email</div>}
                            </div>
                        </div>
                        <div className={`enterMessage`}>
                            <label>Wpisz swoją wiadomość</label>
                            <textarea name={`message`} onChange={change}
                                      placeholder={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
                                      rows={`5`}/>
                            {errors.message && <div className={`error`}>Wiadomość jest za krótka</div>}
                        </div>
                        <div className={`contactButton`}>
                            <button type="submit">Wyślij</button>
                        </div>
                    </form>

                </div>
                <div className={`contactFooter`}>
                    <p>Copyright by Coders Lab</p>
                    <div>
                        <img src={Icon1}/>
                        <img src={Icon2}/>
                    </div>
                </div>
            </section>
        )
};
export default Contact;