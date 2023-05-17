import React, { useState } from 'react';
import "./login.css";
import axios from 'axios';
import Loader from './loader.js';
import Error from './error.js';
import {Link} from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function login() {
    if (password !== "") {
      const user = {
        email,
        password,
      }
      console.log(user)
      try {
        setLoading(true)
        const result = await axios.post('http://localhost:3001/api/auth/login', user)
        setLoading(false)
        localStorage.setItem('currentUser', JSON.stringify(result))
        // window.location.href = '/firstpage'
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
      }
    }
    else if (email === "" && password === "") {
      alert("UNESITE PODATKE!")
    }
    else if (email === "") {
      alert("UNESITE EMAIL!")
    }
    else if (password === "") {
      alert("UNESITE LOZINKU!")
    }

  }

  return (
    <form className='login1'>
      {loading && (<Loader/>)}

      <div>
        <h2>Log in</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" onClick={login}>Log in</button>

      <div className="signup">
        Don't have an account? <button>
          <Link to='/register'>   Sign up</Link></button>
      </div>

      {error && (<Error message='Invalid Credentionals' />)}

    </form>
  );
}

export default LoginForm;

