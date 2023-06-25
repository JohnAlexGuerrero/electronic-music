// import logo from './logo.svg';
import './App.css';

import ImageThumbnail from './assets/images/artist_0001.jpg'
import ImageScreenFull from './assets/images/screenfull_0001.jpg'
import ImageAlbum from './assets/images/album_0001.jpg'

import ScreenFull from './components/ScreenFull'

function App() {
  let videos = [
    {
      "id":1,
      "title":'my video',
      "artist":'martin garrix & dua lipa',
      "description":'video description',
      "thumbnail": ImageThumbnail,
      "favourite": false,
      "screenFull": ImageScreenFull,
      "album":ImageAlbum,
    },
    {
      "id":2,
      "title":'my video',
      "description":'video description',
      "thumbnail": ImageThumbnail,
      "favourite": false,
      "screenFull": ImageScreenFull,
      "album":ImageAlbum,
    },
    {
      "id":3,
      "title":'my video',
      "description":'video description',
      "thumbnail": ImageThumbnail,
      "favourite": false,
      "screenFull": ImageScreenFull,
      "album":ImageAlbum,
    },
    {
      "id":4,
      "title":'only video',
      "description":'video description',
      "thumbnail": ImageThumbnail,
      "favourite": false,
      "screenFull": ImageScreenFull,
      "album":ImageAlbum,
    },
]

  return (
    <div className="App">
      {/* <SearchableVideoList videos={videos} /> */}
      <ScreenFull video={videos[0]} />
    </div>
  );
}

export default App;
