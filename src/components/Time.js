import { useEffect, useState } from "react";

const Time = () => {
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        const IntervalID=setInterval(()=>{
             setTime(new Date());
        },1000);
        const closeEffect =()=>{
            clearInterval(IntervalID);
        }
        return closeEffect;
    },[]);
    return (
        <div className="time">
            {/* {time.toLocaleTimeString()} */}
             {/* {time.toLocaleTimeString('en-US')} */}
            {time.toLocaleTimeString('ko-KR',{
                hour:'2-digit',
                minute:'2-digit',
                hour12:false
            })}
        </div>
    );
};

export default Time;