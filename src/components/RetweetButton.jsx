import React from 'react'
import {FaRetweet} from 'react-icons/fa6'


const RetweetButton = ({video}) => {
  return (
    <button style={{
        backgroundColor:'transparent',
        border:'none',
        cursor:'pointer',
        width:'30px',
        height:'30px',
      }}>
      <FaRetweet style={{width:'25px', color:'white'}} />
    </button>
  )
}

export default RetweetButton
