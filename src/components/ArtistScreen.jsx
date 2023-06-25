import { useState } from 'react'

import backgroundImage from '../assets/images/image_0001.jpg'

const ArtistScreen = () => {
    const [background, setBackground] = useState(backgroundImage)

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '400px',
        height: '100Vh',
        opacity: .8,
      }}
    >
      
    </div>
  )
}

export default ArtistScreen
