import React, { useEffect, useRef, useState } from 'react'

import AudioFile from '../assets/music/In_The_Name_Of_Love.MP3'

import BackButton from './BackButton'
import LikeButton from './LikeButton'
import SunButton from './SunButton'
import AlbumThumbnail from './AlbumThumbnail'
import ProgressPlayer from './ProgressPlayer'
import ForwardButton from './ForwardButton'
import Button from './Button'



const VideoPlayer = ({videos}) => {
  const audioRef = useRef()
  const body = document.querySelector('body')

  const [video, setVideo] = useState({})
  const [isActive, setIsActive] = useState(false)
  const [isPause, setIsPause] = useState(false)

  const handlePlay = ()=>{
    if (isPause) {
      audioRef.current.pause()
    }else{
      audioRef.current.play()
    }

    setIsPause(!isPause)
  }


  const HandleNext = (idVideo) =>{
    let videoIndex = videos.findIndex(item => item.id === (idVideo + 1))

    if (videoIndex === -1) {
      idVideo = 0
    }
    getVideo(videos, idVideo)
  }

  const HandleBackForward = (idVideo) => {
    let videoIndex = videos.findIndex(item => item.id === (idVideo - 1))

    if (videoIndex === -1) {
      idVideo = videos.lenght - 1
    }

    getVideo(videos, idVideo)
  }

  // controla con un click que canciones son favoritas
  const handleHearFavourite = (id)=> {
    let video = videos.find(item => item.id === id)
    video.favourite = !video.favourite
  }

  const getVideo = async(list, index) =>{
    const res = list[index]
    body.style.backgroundColor = res.screenColor

    try {
      const ImageAlbum = require(`../assets/images/${res.album}`)
      //obtener la direccion del archivo del video
      // const AudioFile = require(`../assets/music/${video.track}`)
      res.album = ImageAlbum
      console.log(AudioFile)
      res.track = AudioFile
      // res.track = TrackUrl
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
      <LikeButton video={video} onClick={id => handleHearFavourite(video.id)} />

      <SunButton video={video} />

      <AlbumThumbnail video={video} />
      
      <audio
        ref={audioRef} 
        src={video.track} 
      />

      <Button onClick={handlePlay} pause={isPause} color={video.themeColor} />

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
        color={video.themeColor}
      />

    </div>
  )
}

export default VideoPlayer