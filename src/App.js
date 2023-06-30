// import logo from './logo.svg';
import './App.css';


import ScreenFull from './components/ScreenFull'
import SearchableVideoList from './components/SearchableVideoList'
import VideoPlayer from './components/VideoPlayer';

function App() {
  let videos = [
    {
      "id":1,
      "title":'my video ones',
      "artist":'martin garrix & dua lipa',
      "description":'video description',
      "thumbnail": 'album_0001.jpg',
      "favourite": false,
      "time": 300,
      "album":'album_0001.jpg',
    },
    {
      "id":2,
      "title":'my video two',
      "artist":'martin garrsix & dua lipa',
      "description":'video description',
      "thumbnail": 'album_0002.jpg',
      "favourite": false,
      "time": 300,
      "album":'album_0002.jpg',
    },
    {
      "id":3,
      "title":'my video three',
      "artist":'martin garrix & dua lipa',
      "description":'video description',
      "thumbnail": 'album_0001.jpg',
      "favourite": false,
      "time": 300,
      "album":'album_0003.jpg',
    },
    {
      "id":4,
      "title":'my video four',
      "artist":'martin garrix & dua lipa',
      "description":'video description',
      "thumbnail": 'album_0001.jpg',
      "favourite": false,
      "time": 300,
      "album":'album_0003.jpg',
    },
    
  ]

  return (
    <div className="App">
      {/* <SearchableVideoList videos={videos} /> */}
      {/* <ScreenFull video={videos[0]} videos={videos}/> */}
      <VideoPlayer videos={videos} />
    </div>
  );
}

export default App;
