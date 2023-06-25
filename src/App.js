// import logo from './logo.svg';
import './App.css';

import ImageThumbnail from './assets/images/artist_0001.jpg'
import SearchableVideoList from './components/SearchableVideoList';
import VideoList from './components/VideoList';

function App() {
  let videos = [
    {
      "id":1,
      "title":'my video',
      "description":'video description',
      "thumbnail": ImageThumbnail,
      "favourite": false,
    },
    {
      "id":2,
      "title":'my video',
      "description":'video description',
      "thumbnail": ImageThumbnail,
      "favourite": false,
    },
    {
      "id":3,
      "title":'my video',
      "description":'video description',
      "thumbnail": ImageThumbnail,
      "favourite": false,
    },
    {
      "id":4,
      "title":'only video',
      "description":'video description',
      "thumbnail": ImageThumbnail,
      "favourite": false,
    },
]

  return (
    <div className="App">
      <SearchableVideoList videos={videos} />
      {/* <VideoList videos={videos} /> */}
    </div>
  );
}

export default App;
