import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import YouPage from './YouPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <YouPage/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<YouPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
