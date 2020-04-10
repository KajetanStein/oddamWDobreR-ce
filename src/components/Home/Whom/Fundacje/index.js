import React, {useEffect, useState} from "react";

const Fundacje = (props) => {
    const dane = [];
    for (let i = (props.page - 1) * 3; i < props.page * 3; i++) {
        dane.push(props.dane[i])
    }
    return (
        <>

            <ul className={`lista`}>
                {dane.length > 0 && dane.map((m) => {
                    if (m != undefined) {
                        return (
                            <li>
                                <div>
                                    <div className={`orgInfo`}>
                                        <h2 className={`orgName`}>{m.name}</h2>
                                        <p>{m.mission}</p>
                                    </div>
                                    <div className={`orgList`}>{m.thing}s</div>
                                </div>
                                <div className={`kreska`}></div>
                            </li>)
                    }
                })}
            </ul>

        </>
    );
};
export default Fundacje;