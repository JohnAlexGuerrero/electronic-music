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
    <section 
      style={{
        padding:'1em',
        overflow:'auto',
        scrollbarColor:'red',
        height:'250px',
        marginLeft:'2rem',
        // border:'1px solid red',
      }}>
      <h2
        style={{
          textAlign:'left',
          color:'white',
          margin:'0',
          fontSize:'30px'
        }}
      >
        {'Linkin Park'}
      </h2>

      <p
        style={{
          color:'#fff',
          textAlign:'left',
          margin:'0'
        }}
      >
        Alternative Rock
      </p>

      {videos.map(video => 
        <Video 
          key={video.id} 
          video={video}
        />
      )}
    </section>
  )
}

export default VideoList
