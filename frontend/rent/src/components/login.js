import React from 'react';
import "./login.css";

function Login() {
    return (
        <div className="login">
            <h2>Sign in</h2>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Log in</button>
            </form>
            <div className="signup">
                Don't have an account? <a href="registration.js">Sign up</a>
            </div>
        </div>
    )
}

export default Login;

