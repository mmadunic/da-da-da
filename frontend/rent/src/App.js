import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Login from './components/login';
import Registration from './components/registration';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar/>

        <Login/>
        <Registration/>
        <Footer/>

      </header>
    </div>
  );
}

export default App;
