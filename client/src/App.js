import './App.css';
import { Routes, Route } from 'react-router-dom'
import Singup from './pages/Signup/Singup';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import TellUsMore from './pages/TellUsMore/TellUsMore';
import AllShows from './pages/AllShows/AllShows';
import AllVideos from './pages/AllVideos/AllVideos';
import Credits from './pages/Credits/Credits';
import Profile from './pages/Profile/Profile';
import CreateShow from './pages/CreateShow/CreateShow';
import UploadVideo from './pages/UploadVideo/UploadVideo';
import AccessVideo from './pages/AccessVideo/AccessVideo';
import StreamVideo from './components/videoStream/StreamVideo';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/register' element={<Singup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/moreinfo' element={<TellUsMore/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/allshows' element={<AllShows/>} />
          <Route path='/allvideos' element={<AllVideos/>} />
          <Route path='/credits' element={<Credits/>} />
          <Route path='/me' element={<Profile/>} />
          <Route path='/stream/:videoId' element={<StreamVideo />} />
          <Route path='/createshow' element={<CreateShow/>} />
          <Route path='/uploadvideo' element={<UploadVideo/>} />
          <Route path='/accessvideo' element={<AccessVideo/>} />
        </Routes>
    </div>
  );
}

export default App;
