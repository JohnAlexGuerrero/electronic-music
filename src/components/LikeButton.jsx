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
        // const circle = e.target
        // // circle.style.position = 'absolute'
        // circle.style.backgroundColor = 'purple'
        // circle.style.width = '10px'
        // circle.style.height = '10px'
        // circle.style.borderRadius = '50%'
        // circle.style.transform = 'translate(-50%, -50%) scale(0)'
        // // circle.style.animation = 'scale 0.5s ease-out'
        // circle.style.top = yInside + 'px'
        // circle.style.left = xInside + 'px'

        // e.appendChild(circle)

        // setTimeout(() => circle.remove(), 500)

        setIsActive(!isActive)
        video.favourite = isActive
    }

  return (
    <button
        style={{
            display:'flex',
            alignItems:'center', 
            cursor:'pointer',
            width:'35px', 
            padding:'.5rem',
            border:'none',
            backgroundColor:'transparent',
        }}
        onClick={e => HandleHeart(e)}
    >  
        { isActive ? (
            <FaHeart 
                style={{color:'red', fontSize:'30px'}}

            />
        ):(
            <FaRegHeart
                style={{fontSize:'30px', color:'gray'}}

            />
        )}


    </button>
  )
}

export default LikeButton
