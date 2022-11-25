import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Singup from './pages/Singup';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Singup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
