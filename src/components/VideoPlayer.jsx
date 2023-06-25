import React from 'react'
import PlayButton from './PlayButton'
import PauseButton from './PauseButton'
import BackButton from './BackButton'

const VideoPlayer = ({video}) => {
  return (
    <div 
        style={{
            width:'52.3%',
            backgroundColor:'black',
            height:'100px',
            position:'absolute',
            right:'0',
            bottom:'0',
            display:'flex',
        }}
    >
        <BackButton video={video} />
        <PlayButton video={video} />
        <PauseButton video={video} />

    </div>
  )
}

export default VideoPlayer