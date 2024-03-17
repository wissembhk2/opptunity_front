import logo from './logo.svg';
import './App.css';
import SignupFirstPage from './pages/SignupFirstPage';
import SignupSecondPage from './pages/SignupSecondPage';
import OnbordingPage from './pages/OnboardingPage';
import SigninPage from './pages/SigninPage';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailConfirmationPage from './pages/EmailConfirmation'
import ValidatedEmailPage from './pages/ValidatedEmail';
import CandidateProfilePage from './pages/CandidateProfile';
import RecruiterProfilePage from './pages/RecruiterProfile';
import PrivateRoute from './PrivateRoute';
import CvTemplate from './pages/CvTemplate';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/signup' element={<SignupFirstPage/>}/>
   
    
      <Route path='/signin' element={<SigninPage/>}/>
      <Route path='/cv' element={<CvTemplate/>}/>

  
      <Route path='/emailconfirmation' element={<EmailConfirmationPage/>}/>
  
  
      <Route path='/emailverified/:token' element={<ValidatedEmailPage/>}/>
   

    <Route path='/candidateprofile' element={<PrivateRoute component={CandidateProfilePage} />} />
   

   
      <Route path='/recruiterprofile' element={<RecruiterProfilePage/>}/>
    </Routes>
   </Router>   
  );
}

export default App;
