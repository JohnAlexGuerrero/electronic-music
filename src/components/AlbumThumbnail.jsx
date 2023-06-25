import React from 'react'

const AlbumThumbnail = ({video}) => {
  return (
    <div
        style={{
            backgroundImage:`url(${video.album})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width:'50%',
            height:'70vh',
        }} 
    >

    </div>
  )
}

export default AlbumThumbnail