import React from 'react';
import NavBar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/aboutus';
import Login from './components/login';
import Registration from './components/registration';
import Rent from './components/rent';
import Home from './Homepage';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
         
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/rent/:carid' element={<Rent />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
