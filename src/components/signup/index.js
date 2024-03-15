import React from 'react'
import styles from './signup.module.css'
import { useState , useEffect } from 'react';
import axios from 'axios';
import parseAuthJwt from '../../utils/jsondecoder';


function SignupCompnent({ goToNextStep }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [signupstate,setSignupstate]=useState('');


  const [password, setPassword] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: '930399684385-oi5ituoiejcgivnotrm1b99f77tke91n.apps.googleusercontent.com',
          callback: handleCredentialResponse,
          ux_mode: 'pop-up',
          scope: 'profile email', // Add your desired scopes here, separated by spaces
        });
      
      }
    };
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleSignInClick = () => {
    window.google.accounts.id.prompt(); // This function triggers the Google Sign-In flow
  };
  async function  handleCredentialResponse(googleresponse) {
    // Handle the ID token in the response
    console.log('Encoded JWT ID token: ' + googleresponse.credential);
    const google_user=parseAuthJwt(googleresponse.credential)
    try {
      console.log(googleresponse.credential.name)
      const response = await axios.post('http://127.0.0.1:8000/api/signup_google',
      {
        name:google_user.name,
        email:google_user.email,
        is_google_account:true,
        status:true,
        google_id:google_user.sub
      });
      
      sessionStorage.setItem('email', google_user.email); // Persist to sessionStorage
      sessionStorage.setItem('is_google_auth', true); // Persist to sessionStorage


      console.log('Sign up successful:', response);
      goToNextStep();
      // Handle successful login, e.g., store the token, redirect the user
  
    } catch (error) {
      console.log(error)
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setSignupstate('Email address already used')
        console.error('Login failed:', error.response.data);
        // Handle login failure, e.g., show an error message
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
      }
    }
  }
  async function signup() {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup',
      {
        "name":name,
        "email":email,
        "password":password

      });
      sessionStorage.setItem('email', email); // Persist to sessionStorage
      console.log('Sign up successful:', response);
      goToNextStep();
      // Handle successful login, e.g., store the token, redirect the user
  
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setSignupstate('Email address already used')
        console.error('Login failed:', error.response.data);
        // Handle login failure, e.g., show an error message
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
      }
    }
  }
  return (
    <div className={styles.signupsection}>
      <h1>Registration</h1>
      <p>Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail</p>
      <table>
        <tr>
          <td>
            <label>Name</label><br/>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </td>
        </tr>
        <tr>
          <td >
          <label>Email</label><br/>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </td>
        </tr>
        <tr>
          <td>
          <label>Password</label><br/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </td>
        </tr>
        <tr>
          <td>
          <button   className={`${styles.submit}`} onClick={signup}> submit</button>
          </td>
        </tr>
        <tr>
          <td>
            <p style={{color:'red'}}>{signupstate}</p>
          </td>
        </tr>
      </table>
    <div className={`${styles.socialsignup}`}>
     <p>OR</p> 
     <div>
     <button className={`${styles.socialmediasignup}`} onClick={handleSignInClick} >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"></img>
          Google Sign Up
          </button>
          <button className={`${styles.socialmediasignup}`} >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"></img>
          Microsoft Sign Up
          </button>
      </div>
    </div>
    <div className={`${styles.loginredirect}`}>
      <p>Already have an account? <a href="/signin">Log In</a></p>
    </div>
    </div>
  )
}

export default SignupCompnent
