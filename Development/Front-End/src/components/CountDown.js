import React , {useEffect, useState} from "react";
import REACTDOM from "react-dom";

const CountDown = props => {
    
    const calculateTimeLeft = () => {
        const difference = +new Date({props}) - +new Date();
        let timeLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

        return timeLeft;

    };

    const[timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000);
    });
}