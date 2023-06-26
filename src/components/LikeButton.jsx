import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import '../App.css'

const LikeButton = ({video}) => {
    const [isActive, setIsActive] = useState(video.favourite)

    const HandleHeart = (e)=>{
        const x = e.pageX
        const y = e.pageY
        
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        console.log(e.target)

        setIsActive(!isActive)
        video.favourite = isActive
    }

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
            left:'1.5rem', 
            padding:'.5rem',
            border:'1px solid gray',
            backgroundColor:'gray',
            borderRadius:'100%'
        }}
        onClick={e => HandleHeart(e)}
    >  
        { isActive ? (
            <FaRegHeart
                style={{fontSize:'20px', color:'#fff'}}

            />
        ):(
            <FaHeart
                style={{fontSize:'20px', color:'#fff'}}

            />
        )}


    </button>
  )
}

export default LikeButton
