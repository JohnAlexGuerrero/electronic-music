import React from 'react'
import {FaPlay, FaPause} from 'react-icons/fa'

const Button = ({pause, onClick, color}) => {
  return (
    <button style={{
        backgroundColor: color,
        boxShadow:'0 10px 10px rgba(0, 0, 0, 0.16), 0 5px 9px rgba(0, 0, 0, 0.23)',
        border:'none',
        borderRadius:'100%',
        margin:'1em',
        cursor:'pointer',
        width:'40px',
        height:'40px',
        position:'absolute',
        top:'16.5em',
        left:'9.5rem',
        zIndex:'1',
    }}
    onClick={onClick}>

        {pause ? (
            <FaPause style={{width:'35px', color:'white'}} />
        ):(
            <FaPlay style={{width:'35px', color:'white'}} />
        )}

    </button>
  )
}

export default Button