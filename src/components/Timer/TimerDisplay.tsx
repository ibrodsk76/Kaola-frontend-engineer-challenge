import React from 'react';
import {TimerContainer, TimerCell} from './TimerStyles';

export const TimerDisplay = ({deadline, currentTime, onDone} : {deadline : string, currentTime : Date, onDone : () => void}) => {
    
    var end = new Date(deadline);
    var period = end.getTime() - currentTime.getTime();    
    if (period <= 0) {
        onDone();
    }
    var seconds = Number(period/1000);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    return (
        <>
        <TimerContainer>
            <TimerCell>
                {`Time to deadline:`} <br/>
                {`${d} days ${h} hours ${m} minutes ${s} seconds`} 
            </TimerCell>
        </TimerContainer>
        </>
    )

};