import React from 'react';
import styles from './candidatenavbar.module.css'
import logo from '../../assets/blacklogo.svg'
import roadmap from './assets/Roadmap.svg'
import messages from './assets/Messages.svg'
import profileimg from './assets/profileimg.svg'


const CandidateNavbarComponent = () => {
  return (
            <div className={`d-flex justify-content-between bg-light`}>
                <img src={logo} className='mx-5'></img>
                <div className='mx-5'>
                    <img src={roadmap}></img>
                    <img src={messages}></img>
                    <img src={profileimg}></img>


                </div>

            </div>
  );
};

export default CandidateNavbarComponent;
