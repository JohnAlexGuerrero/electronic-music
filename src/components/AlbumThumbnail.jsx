import React from 'react'

const AlbumThumbnail = ({imageVideo}) => {
  return (
    <div
      style={{
        backgroundImage:`url(${imageVideo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width:'120px',
        height:'120px',
        borderRadius:'5px',
        position:'absolute',
        top:'9rem',
        left:'1.5rem',
        zIndex:'1',
        boxShadow:'0 10px 10px rgba(0, 0, 0, 0.16), 0 5px 9px rgba(0, 0, 0, 0.23)',
      }} 
    >
    </div>
  )
}

export default AlbumThumbnail