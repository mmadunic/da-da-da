import './App.css';
import React from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Login from './components/login';
import Registration from './components/registration';
import Renting from './components/biranje';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        {/* <Login/>
        <Registration/> */}


        <Renting />
        <Footer />

      </header>
    </div>
  );
}

export default App;
