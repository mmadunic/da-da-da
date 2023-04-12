import React from 'react';
import "./registration.css";

function Registration() {
    return (
        <div className="registration">
            <h2>Sign up</h2>
            <form>

                <label htmlFor="firstName">
                    First Name: <t/>
                    <input type="firstName" id="firstName" name="firstName" placeholder="FirstName" required />
                </label>
                

                <label htmlFor="lastName">
                    Last Name: <t/>
                    <input type="lastName" name="lastName" id="lastName" placeholder="LastName" required />
                </label>
                

                <label>
                    Date of birth: <t/>
                    <input type="date" name="birthdate" required />
                </label>

                <label htmlFor="email"> 
                    Email: <t/>
                    <input type="email" id="email" name="email" required />
                </label>
                

                <label htmlFor="password">
                    Password: <t/>
                    <input type="password" id="password" name="password" required />
                </label>
                

                <label htmlFor="confirmPassword">
                    Confirm Password: <t/>
                    <input type="password" id="confirmPassword" placeholder="Confirm Password" required />
                </label>
                

                <label>
                    <input type="checkbox" name="ageCheck" required />
                    I am over 18 years old.
                </label>

                
                <button type="submit" class="btn">Register</button>

                <label className='bla'>
                    You have an account? <a href="login.js">Sign in</a>
                </label>
            </form>
        </div>


    )
}


export default Registration;