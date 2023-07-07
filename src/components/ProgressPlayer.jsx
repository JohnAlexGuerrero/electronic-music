import React, { useEffect, useState } from 'react'
import RepeatButton from './RepeatButton'
import RetweetButton from './RetweetButton'

const ProgressPlayer = ({pause, timeVideo, color}) => {
    const time = timeVideo
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [range, setRange] = useState(0)

    useEffect(()=>{
        let interval = null

        const a = ()=>{
            interval = setInterval(() => {
                setSeconds(seconds + 1)
                setRange(range + 1)
        
                if (seconds === 59) {
                    setMinutes(minutes + 1)
                    setSeconds(0)
                }
            }, 1000);
        }
        
        if (pause) {
            a()
        }else{
            clearInterval(interval)
            setMinutes(0)
            setSeconds(0)
        }

    }, [pause])


  return (
    <div
        style={{
            width:'350px',
            height:'100px',
            backgroundColor: color,
            borderBottomLeftRadius:'20px',
            borderBottomRightRadius:'20px',
            position:'absolute',
            bottom:'0',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}
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
                value={pause ? range : 0}
                max={time}
                style={{
                    width:'100%',
                    backgroundColor: color,
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