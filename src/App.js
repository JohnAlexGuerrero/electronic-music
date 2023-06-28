// import logo from './logo.svg';
import './App.css';


import ScreenFull from './components/ScreenFull'
import SearchableVideoList from './components/SearchableVideoList'
import VideoPlayer from './components/VideoPlayer';

function App() {
  let videos = [
    {
      "id":1,
      "title":'my video',
      "artist":'martin garrix & dua lipa',
      "description":'video description',
      "thumbnail": 'album_0001.jpg',
      "favourite": false,
      "time": 300,
      "album":'album_0001.jpg',
    }
    
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
