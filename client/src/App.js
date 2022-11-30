import './App.css';
import { Routes, Route } from 'react-router-dom';
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
import BookShow from './pages/BookShow/BookShow';
import StreamVideo from './components/videoStream/StreamVideo';
import Navbar from './components/Navbar/Navbar';
import UserContext from './Context/UserContext';

function App() {
  const { isLoggedIn, user } = UserContext();

  return (
    <div className='App'>
      <Navbar />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          {isLoggedIn === false ? (
            <>
              <Route path='/register' element={<Singup />} />
              <Route path='/login' element={<Login />} />
            </>
          ) : (
            <>
              <Route path='/me' element={<Profile />} />

              {user.type === 'org' ? (
                <>
                  <Route path='/org-info' element={<TellUsMore />} />
                  <Route path='/create-show' element={<CreateShow />} />
                  <Route path='/upload-video' element={<UploadVideo />} />
                </>
              ) : (
                <>
                  <Route path='/shows' element={<AllShows />} />
                  <Route path='/videos' element={<AllVideos />} />
                  <Route path='/credits' element={<Credits />} />
                  <Route path='/stream/:videoId' element={<StreamVideo />} />
                  <Route path='/access-video' element={<AccessVideo />} />
                  <Route path='/book-show' element={<BookShow />} />
                </>
              )}
            </>
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
