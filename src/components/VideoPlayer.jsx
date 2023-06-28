import React, { useEffect, useState } from 'react'

import PlayButton from './PlayButton'
import PauseButton from './PauseButton'
import BackButton from './BackButton'
import LikeButton from './LikeButton'
import SunButton from './SunButton'
import AlbumThumbnail from './AlbumThumbnail'
import ProgressPlayer from './ProgressPlayer'
import ForwardButton from './ForwardButton'

const VideoPlayer = ({videos}) => {
  const [isActive, setIsActive] = useState(false)

  let video = videos[0]
  const ImageAlbum = require('../assets/images/' + video.album)

  const HandlePlay = ()=>{
    setIsActive(!isActive)
  }

  useEffect(()=>{
    
  },[])

  return (
    <div 
      style={{
        width:'350px',
        height:'350px',
        borderRadius:'20px',
        boxShadow:'0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        position:'relative'
      }}
    >
      <LikeButton video={video} />
      <SunButton video={video} />
      <AlbumThumbnail imageVideo={ImageAlbum} />
      {isActive ? 
        (
          <PauseButton video={video} handle={HandlePlay}  />
        ):(
        <PlayButton video={video} handle={HandlePlay} />)
      }

      <BackButton video={video} />
      <ForwardButton video={video} />
      <p
        style={{
          color:'lightgray',
          position:'absolute',
          top:'9rem',
          right:'2rem',
          
        }}
      >
        {video.artist}
      </p>

      <h2
        style={{
          color:'#fff',
          fontSize:'20px',
          position:'absolute',
          top:'11rem',
          left:'9.5rem',
        }}
      >
        {video.title}
      </h2>
      <ProgressPlayer active={isActive} timeVideo={video.time}/>
    </div>
  )
}

export default VideoPlayer