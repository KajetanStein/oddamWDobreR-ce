import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Icon1 from "../../../../assets/Icon-1.svg";
import Icon4 from "../../../../assets/Icon-4.svg";
import TimePicker from 'react-time-picker';
import Ornament from "../../../../assets/Decoration.svg";
// import Moment as moment from 'moment';
// import { extendMoment } from 'moment-range';
// import Calendar from "react-input-calendar"


const Thanks = (props) => {
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