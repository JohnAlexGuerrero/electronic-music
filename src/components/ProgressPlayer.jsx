import React, { useState } from 'react'
import RepeatButton from './RepeatButton'
import RetweetButton from './RetweetButton'

const ProgressPlayer = ({active, timeVideo}) => {
    const [time, setTime] = useState(timeVideo)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [range, setRange] = useState(0)

    let interval = null

    if (active) {
        interval = setInterval(() => {
            setSeconds(seconds + 1)
            setRange(range + 1)
    
            if (seconds === 59) {
                setMinutes(minutes + 1)
                setSeconds(0)
            }
        }, 1000);
    }
    

    if (range === time ) {
        clearInterval(interval)
    }

  return (
    <div
        style={{
            width:'350px',
            height:'100px',
            backgroundColor:'rgba(0, 0, 0, 0.6)',
            borderBottomLeftRadius:'20px',
            borderBottomRightRadius:'20px',
            position:'absolute',
            bottom:'0',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
,        }}
    >
        <div style={{
            width:'300px',
            flexDirection:'column'
            }}
        >
            <input 
                type="range" 
                name="" 
                id=""
                min={0}
                value={range}
                max={timeVideo}
                style={{
                    width:'100%',
                    backgroundColor:'rgb(82, 82, 82)',
                    marginTop:'1.5rem'
                }} 
            />
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <span style={{
                    color:'lightgray',
                    fontSize:'13px'
                }}>
                    {minutes < 10 ? '0' + minutes : minutes}
                    :
                    {seconds < 10 ? '0' + seconds : seconds}
                </span>
                
                <div>
                    <RepeatButton video={{}} />
                    <RetweetButton video={{}} />
                </div>


                <span style={{
                    color:'lightgray',
                    fontSize:'13px'
                }}>
                    {Math.floor(time / 60)}
                    :
                    {(time % 60) < 10 ? '0' + (time % 60) : (time % 60)}
                </span>
            </div>
        </div>
        
    </div>
  )
}

export default ProgressPlayer