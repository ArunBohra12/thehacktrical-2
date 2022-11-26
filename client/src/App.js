import './App.css';
import { Routes, Route } from 'react-router-dom'
import Singup from './pages/Signup/Singup';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import TellUsMore from './pages/TellUsMore/TellUsMore';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/register' element={<Singup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/moreinfo' element={<TellUsMore/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
    </div>
  );
}

export default App;
