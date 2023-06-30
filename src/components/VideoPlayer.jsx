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
  const [video, setVideo] = useState({})

  const [isActive, setIsActive] = useState(false)

  const HandlePlay = ()=>{
    setIsActive(true)
  }

  const HandleStop = (interval)=>{
    setIsActive(false)
  }

  const HandleNext = (idVideo) =>{
    let videoIndex = videos.findIndex(item => item.id === (idVideo + 1))

    if (videoIndex === -1) {
      idVideo = 0
    }
    getVideo(videos, idVideo)
    HandleStop()
    HandlePlay()
  }

  const HandleBackForward = (idVideo) => {
    let videoIndex = videos.findIndex(item => item.id === (idVideo - 1))

    if (videoIndex === -1) {
      idVideo = videos.lenght - 1
    }
    console.log(idVideo)
    getVideo(videos, idVideo)
    HandlePlay()
  }

  const getVideo = async(list, index) =>{
    const res = list[index]

    try {
      const ImageAlbum = require(`../assets/images/${res.album}`)
      res.album = ImageAlbum
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }

    setVideo(res)
  }

  useEffect(() => {
    getVideo(videos, 0)
  }, [])


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
      <AlbumThumbnail video={video} />

      {isActive ? 
        (
          <PauseButton video={video} onClick={HandleStop}  />
        ):(
          <PlayButton video={video} handle={HandlePlay} />
        )
      }

      <BackButton 
        video={video}
        onClick={() => HandleBackForward(video.id)}
      />

      <ForwardButton 
        video={video} 
        onClick={() =>HandleNext(video.id)} 
      />

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

      <ProgressPlayer
        pause={isActive}
        timeVideo={video.time}
      />

    </div>
  )
}

export default VideoPlayer