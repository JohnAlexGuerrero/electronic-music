import React from 'react'
import {FaForward} from 'react-icons/fa'

const ForwardButton = ({video, onClick}) => {
  return (
    <button
      id={video.id} 
      style={{
        backgroundColor:'gray',
        border:'none',
        borderRadius:'100%',
        margin:'1em',
        cursor:'pointer',
        width:'35px',
        height:'35px',
        position:'absolute',
        top:'16.8em',
        left:'14.6rem',
        zIndex:'1'
      }}
      onClick={onClick}
    >
        <FaForward style={{width:'25px', color:'white'}}/>
    </button>
  )
}

export default ForwardButton