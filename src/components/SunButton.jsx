import React from 'react'
import {FaSun} from 'react-icons/fa'

const SunButton = ({video}) => {
  return (
    <button
        style={{
            display:'flex',
            alignItems:'center', 
            cursor:'pointer',
            width:'40px',
            height:'40px',
            position:'absolute',
            top:'1.5em',
            right:'1.5rem', 
            padding:'.5rem',
            alignContent:'center',
            border:'none',
            backgroundColor: video.themeColor,
            borderRadius:'100%'
        }}
    >
        <FaSun video={video} style={{fontSize:'20px', color:'#fff'}}/>
    </button>
  )
}

export default SunButton