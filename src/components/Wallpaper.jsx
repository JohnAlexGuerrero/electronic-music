import React from 'react'
import AlbumThumbnail from './AlbumThumbnail'

const Wallpaper = ({video}) => {


  return (
    <div
        style={{
            
            height:'100vh',
            width:'100vw',
            position:'absolute',
            top:'-0.1vw',
            left:'-17.5vh',
            transition:'0.4s ease',
        }}
    >
        <AlbumThumbnail video={video} />
    </div>
  )
}

export default Wallpaper
