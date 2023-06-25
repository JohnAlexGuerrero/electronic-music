import React from 'react'

const Thumbnail = ({video}) => {
  return (
    <div
        style={{
            width:'150px',  

            padding:'.2em  '
        }}
    >
        <img 
            src={video.thumbnail} 
            alt={video.title}
            style={{
                width:'100px',
                height:'auto', 
                borderRadius:'5px', 
            }}
        />
    </div>
  )
}

export default Thumbnail