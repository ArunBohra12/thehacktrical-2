import './App.css';
import { Routes, Route } from 'react-router-dom'
import Singup from './pages/Singup';
import Home from './pages/Home';
import Login from './pages/Login';
import TellUsMore from './pages/TellUsMore';

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
