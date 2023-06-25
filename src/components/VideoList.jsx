import React from 'react'
import Video from './Video'

const VideoList = ({videos, emptyHeading}) => {
    const count = videos.length
    let heading = emptyHeading
    if (count > 0) {
        const noun = count > 1 ? 'Videos' : 'Video'
        heading = count + ' ' + noun
    }

  return (
    <section style={{padding:'1em'}}>
      <h2
        style={{textAlign:'left'}}
      >{heading}</h2>
      {videos.map(video => 
        <Video key={video.id} video={video} />
      )}
    </section>
  )
}

export default VideoList
