import React, { useState } from 'react';
import "./registration.css";
import axios from 'axios';
import Loader from './loader.js';
import Error from './error.js';
import Success from './success.js';
import { Link} from 'react-router-dom';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [over18, setOver18] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  async function register() {
    if (password !== "" && confirmPassword !== "" && password === confirmPassword) {
      const user = {
        firstName,
        lastName,
        birthdate,
        email,
        password,
        over18,
      }
      console.log(user)
      try {
        setLoading(true)
        const result = await axios.post('http://localhost:3001/api/auth/register', user)
        setLoading(false)
        localStorage.setItem('currentUser', JSON.stringify(result))
        window.location.href = '/firstpage'
      } catch (error) {
        console.log(error)
        setLoading(false)
        setError(true)
        setSuccess(true)
      }
    }
    else {
      alert("PASSWORDS DON'T MATCH! TRY AGAIN!")
    }
  }

  return (
    <form className='registration-form'>
      <div>
      {loading && (<Loader/>)}
      <h2>Sign up</h2>
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="birthdate">Date of Birth:</label>
        <input type="date" id="birthdate" name="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <div>
        <input type="checkbox" id="over-18" name="over-18" checked={over18} onChange={(e) => setOver18(e.target.checked)} />
        <label htmlFor="over-18">I am over 18 years old.</label>
      </div>
      <button type="submit" onClick={register}>Register</button>

      <div className="signin">
        Already have an account? <button> <Link to='/login'>Sign in</Link></button>
      </div>

      {error && (<Error message='Invalid Credentionals'/>)}
      {success && (<Success message='Successfully registered'/>)}
   
    </form>
  )
}

export default RegistrationForm;