import React from "react";
import Ornament from "../../../../assets/Decoration.svg";



const Thanks = () => {
    return (
        <>
            <div className={`formContent`}>
                <div className={`thanks`}>
                <h1>Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie informacje o odbiorze.</h1>
                <img src={Ornament} className={`ornament`}></img>
            </div>
            </div>
        </>
    )
};
export default Thanks;