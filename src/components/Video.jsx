import React, { useRef } from 'react'

import Thumbnail from './Thumbnail'
import LikeButton from './LikeButton'

const Video = ({video}) => {
  return (
    <div
        style={{ 
            display:'flex', 
            alignItems:'center',
            width:'100%',
            marginTop:'5px',
        }}
    >
        <span
            style={{
                color:'#fff',
                textAlign:'left',
                width:'40px'
            }}
        >
            {video.id}
        </span>

        <p
            style={{
                margin:'0',
                width:'200px',
                textAlign:'left',
                color:'#fff',
            }}
        >
            {video.title}
        </p>

        <p
            style={{
                margin:'0',
                width:'150px',
                textAlign:'left',
                color:'#fff',
            }}
        >
            {video.album_name}
        </p>

        <span
            style={{
                color:'#fff',
                textAlign:'left',
                width:'40px'
            }}
        >
            {Math.floor(video.time / 60)}
            :
            {(video.time % 60) < 10 ? '0' + (video.time % 60) : (video.time % 60)}
        </span>

    </div>
  )
}

export default Video
