import React from 'react'

const Thumbnail = ({video}) => {
  return (
    <div
        style={{
            width:'100px',  
            padding:'.2em',
            // border:'1px solid black'
        }}
    >
        <img 
            src={video.thumbnail} 
            alt={video.title}
            style={{
                width:'40px',
                height:'auto', 
                borderRadius:'5px', 
            }}
        />
    </div>
  )
}

export default Thumbnail