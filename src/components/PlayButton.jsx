import React from 'react'
import {FaPlay} from 'react-icons/fa'

const PlayButton = ({video, handle}) => {
  return (
    <button
        style={{
            backgroundColor:'gray',
            border:'none',
            borderRadius:'100%',
            margin:'1em',
            cursor:'pointer',
            width:'40px',
            height:'40px',
            position:'absolute',
            top:'16.5em',
            left:'9.5rem',
            zIndex:'1'
        }}
        onClick={handle}
    >
        <FaPlay style={{width:'35px', color:'white'}} />
    </button>
  )
}

export default PlayButton