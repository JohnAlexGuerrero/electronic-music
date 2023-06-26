import React from 'react'
import Wallpaper from './Wallpaper'
import VideoPlayer from './VideoPlayer'
import SearchableVideoList from './SearchableVideoList'

const ScreenFull = ({video, videos}) => {
    const body = document.body
    body.style.backgroundImage = `url(${video.screenFull})`

  return (
    <div
        style={{
            // backgroundImage:`url(${video.screenFull})`,
            height:'70vh',
            width:'70vw',
            position:'relative',
            overflow:'hidden',
            // opacity:'.8',
            backgroundColor:'rgba(0,0,0)',
        }}
    >
        <Wallpaper video={video} />
        <SearchableVideoList videos={videos} />
        <VideoPlayer video={video} />
    </div>
  )
}

export default ScreenFull