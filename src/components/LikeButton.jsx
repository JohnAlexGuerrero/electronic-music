import {FaHeart} from 'react-icons/fa'

const LikeButton = ({video, onClick}) => {

  return (
    <button
        style={{
            display:'flex',
            alignItems:'center', 
            cursor:'pointer',
            width:'40px',
            height:'40px',
            position:'absolute',
            top:'1.5em',
            left:'1.5rem', 
            padding:'.5rem',
            border: `1px solid ${video.themeColor}`,
            backgroundColor: video.themeColor,
            borderRadius:'100%'
        }}
        onClick={onClick}
    >  
        <FaHeart style={{fontSize:'20px', color:`${video.favourite ? "red" : "white"}`}} />
    </button>
  )
}

export default LikeButton
