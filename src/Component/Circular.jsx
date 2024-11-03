import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circular = () => {
    let [percentage, setpercentage] = useState(0)
    let stp = 66;
    const value = 0.66;

    useEffect(() => {
        setInterval(() => {
            if (percentage <= stp) {
                clearInterval()
            }
            if (percentage < stp) {
                setpercentage(percentage++)
            }
        }, 20)
    }, [])

    return (
        <div className="w-[160px] h-[160px]">
            <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                pathColor: '#E5745D', pathTransition: '0.2s'
            })} />;
        </div>
    )
}

export default Circular