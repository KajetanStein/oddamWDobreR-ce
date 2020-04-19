import React, {useEffect, useState} from "react";

const Fundacje = (props) => {
    const dane = [];
    for (let i = (props.page - 1) * 3; i < props.page * 3; i++) {
        dane.push(props.dane[i])
    }
    return (
        <>

            <ul className={`lista`}>
                {props.dane.length > 1 && dane.map((m) => {
                        return (
                            <li>
                                <div>
                                    <div className={`orgInfo`}>
                                        <h2 className={`orgName`}>{m.name}</h2>
                                        <p>{m.mission}</p>
                                    </div>
                                    <div className={`orgList`}>{m.things}</div>
                                </div>
                                <div className={`kreska`}></div>
                            </li>)
                })}
            </ul>

        </>
    );
};
export default Fundacje;