// import logo from './logo.svg';
import './App.css';


import VideoList from './components/VideoList';
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
      "album_name":'Hibryd Theory',
      "album":'album_0001.jpg',
      "track":"In_The_Name_Of_Love.MP3",
      "themeColor":'#A2A3AB',
      "fontColor":'',
      "screenColor":'#BABCC4',
    },
    {
      "id":2,
      "title":'my video two',
      "artist":'martin garrsix & dua lipa',
      "description":'video description',
      "thumbnail": 'album_0002.jpg',
      "favourite": false,
      "time": 300,
      "album_name":'Hibryd Theory',
      "album":'album_0002.jpg',
      "track":"In_The_Name_Of_Love.MP3",
      "themeColor":'#BA1A1C',
      "fontColor":'',
      "screenColor":'#E01F22',
    },
    {
      "id":3,
      "title":'my video three',
      "artist":'martin garrix & dua lipa',
      "description":'video description',
      "thumbnail": 'album_0001.jpg',
      "favourite": false,
      "time": 300,
      "album_name":'Hibryd Theory',
      "album":'album_0003.jpg',
      "track":"In_The_Name_Of_Love.MP3",
      "themeColor":'#D4BC73',
      "fontColor":'',
      "screenColor":'#EDD281',
    },
    {
      "id":4,
      "title":'In The Name Of Love',
      "artist":'Martin Garrix ft. Bebe Rexha',
      "description":'video description',
      "thumbnail": 'album_0005.jpg',
      "favourite": false,
      "time": 300,
      "album_name":'Hibryd Theory',
      "album":'album_0005.jpeg',
      "track":"In_The_Name_Of_Love.MP3",
      "themeColor":'#5385A8',
      "fontColor":'',
      "screenColor":'#5C93BA',
    },
    
  ]

  return (
    <section
      style={{
        display:'flex',
        justifyContent:'center',
        marginTop: '20%',
      }}
    >
      <VideoPlayer videos={videos} />
      <VideoList videos={videos} />
    </section>
  );
}

export default App;
