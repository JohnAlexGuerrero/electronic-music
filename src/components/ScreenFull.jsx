import React from 'react'
import Wallpaper from './Wallpaper'
import VideoPlayer from './VideoPlayer'

const ScreenFull = ({video}) => {
    const body = document.body
    body.style.backgroundImage = `url(${video.screenFull})`

  return (
    <div
        style={{
            boxShadow:'0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
            height:'70vh',
            width:'70vw',
            position:'relative',
            overflow:'hidden',
            backgroundColor:'#BBB',
        }}
    >
        <Wallpaper video={video} />
        <VideoPlayer video={video} />
    </div>
  )
}

export default ScreenFull