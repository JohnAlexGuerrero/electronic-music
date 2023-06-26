import React from 'react'

import PlayButton from './PlayButton'
import PauseButton from './PauseButton'
import BackButton from './BackButton'
import LikeButton from './LikeButton'
import SunButton from './SunButton'
import AlbumThumbnail from './AlbumThumbnail'
import ProgressPlayer from './ProgressPlayer'

const VideoPlayer = ({videos}) => {
  let video = videos[0]

  return (
    <div 
        style={{
          // border:'1px solid black',
          width:'350px',
          height:'350px',
          borderRadius:'20px',
          boxShadow:'0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
          position:'relative'
        }}
    >
      <LikeButton video={video} />
      <SunButton video={video} />
      <AlbumThumbnail video={video} />
      <PlayButton video={video} />
      <BackButton video={video} />
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
      <ProgressPlayer video={video} />
    </div>
  )
}

export default VideoPlayer