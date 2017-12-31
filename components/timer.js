import React from 'react';


const Timer = (props)=>{
    return(
        <div>
            <p>TIME LEFT:</p>
            <p>{props.sec}</p>
        </div>
    )
}

export default Timer;