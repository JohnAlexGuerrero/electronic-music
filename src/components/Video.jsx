import React from 'react'

import Thumbnail from './Thumbnail'
import LikeButton from './LikeButton'

const Video = ({video}) => {
  return (
    <div
        style={{ display:'flex', alignItems:'center',width:'100%'}}
    >
        <Thumbnail video={video} />
        <a 
            href={video.url}
            style={{width:'300px', textAlign:'left', padding:'.2rem'}}
        >
            <h3
                style={{margin:'0'}}
            >{video.title}</h3>
            <p
                style={{margin:'0'}}
            >{video.description}</p>
        </a>
        <LikeButton video={video} />
    </div>
  )
}

export default Video
