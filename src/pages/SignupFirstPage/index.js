import React from 'react'
import FirstPageLeftComponent from '../../components/FirstPageLeftComponent'
import SignupCompnent from '../../components/signup'
import styles from './style.module.css'
import { useState , useEffect } from 'react';
import SignupSecondPage from '../SignupSecondPage';
import OnbordingPage from '../OnboardingPage';

function SignupFirstPage() {
  console.log(sessionStorage.getItem('signupstep'))
  const [globalstep, setGlobalstep] = useState(() => {
    const savedStep = sessionStorage.getItem('signupstep');
    return savedStep ? parseInt(savedStep, 10) : 1; // Default to 1 if nothing is stored
  });
  const setStepAndPersistInSession = (newStep) => {
    setGlobalstep(newStep); // Update the state
    sessionStorage.setItem('signupstep', newStep.toString()); // Persist to sessionStorage
  };

  // Example function to move to the next step
  const goToNextStep = () => {
    setStepAndPersistInSession(globalstep + 1);
  };

  return (
    <div>
    {globalstep ==1 || globalstep ==null  ?(
    <div class={`container-fluid  ${styles.main} `}>
      <div className="row ">
        <div className="col-sm-6  ">
        <FirstPageLeftComponent />
        </div>
     
      <div className={`col-sm-6 p-0 col-12 m-0  ${styles.signup} `}>
        <SignupCompnent  goToNextStep={goToNextStep} />
      </div>
      </div>
    </div>
    ): globalstep==2 ? (<SignupSecondPage goToNextStep={goToNextStep}/>):
    (<OnbordingPage/>)}
    </div>
  )
}

export default SignupFirstPage
