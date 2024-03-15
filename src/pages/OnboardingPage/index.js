import React from 'react'
import FirstPageLeftComponent from '../../components/FirstPageLeftComponent'
import SignupCompnent from '../../components/signup'
import styles from './style.module.css'
import man from './assets/man.svg'
import book from './assets/books.svg'
import grp from './assets/grp.svg'
import doctor from './assets/doctor.svg'
import progressone from './assets/progressone.svg'
import progresstwo from './assets/progresstwo.svg'
import progressthree from './assets/progressthree.svg'
import Select from 'react-select';
import { getNameList } from 'country-list';
import ISO6391 from 'iso-639-1';
import axios from 'axios';

import { useState , useEffect } from 'react';

function OnbordingPage() {
  const [userInfo, setUserInfo] = useState({
    email:  sessionStorage.getItem('email'),
    age: null,
    country: null,
    languages: [],
    // You can add more user info fields here as needed
  });
  const selectAge = (ageRange) => {
    // Update userInfo with the selected age range while preserving other info
    setUserInfo(prevInfo => ({
      ...prevInfo,
      age: ageRange
    }));
  };


  const selectCountry = (selectedOption) => {
    setUserInfo(prevInfo => ({
      ...prevInfo,
      country: selectedOption.label // Assuming you want to store the country name. Use selectedOption.value if you prefer the country code.
    }));
  };
  const selectLanguage = (selectedOptions) => {
  setUserInfo(prevInfo => ({
    ...prevInfo,
    languages: selectedOptions.map(option => option) // Storing the language names. Use option.value if you prefer the language codes.
  }));
};
  useEffect(() => {
  }, [userInfo]);
  const countryNames = getNameList();
  const countryOptions = Object.entries(countryNames).map(([key,code, name]) => ({

    label: key,
    value: code
  })); 
  const languageOptions = ISO6391.getAllNames().map((name, index) => ({
    label: name,
    value: ISO6391.getAllCodes()[index]
  }));
    // For the country Select
const selectedCountryOption = userInfo.country ? countryOptions.find(option => option.label === userInfo.country) : null;

// For the languages Select, assuming userInfo.languages is an array of language names
// const selectedLanguageOptions = [{ label: "Abkhaz", value: "ab"}];
const selectedLanguageOptions = userInfo.languages ? userInfo.languages : {};
  const [step, setStep] = useState(1);
  const incrementStep = () => {
    setStep(prevStep => prevStep<3 ? prevStep + 1 : prevStep);
  };
  const decrementStep = () => {
    setStep(prevStep => prevStep >1 ? prevStep - 1 : prevStep);
  };

  async function onboard() {
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/testonboard',userInfo
     );
     const token = await axios.post('http://127.0.0.1:8000/api/tokengenerate?email='+userInfo.email
     );
  
      console.log('onboard:', response);
      // Handle successful login, e.g., store the token, redirect the user
      window.location.href = '/emailconfirmation';
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
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
    
    <div className={`container-fluid  ${styles.main} `}>
      <div className="row ">

     
        <div className={`col-sm-6  `}>
                <div  className={`${styles.logo}`} ></div>
                { step==1 ? (
                  <div className={`${styles.firstLeft} d-none d-sm-block`}>
                    <h1>Level up Your skills- Earn Points and rewards</h1>
                    <div className={`${styles.parent}`}>
                       <img src={man}/>
                       <div className={`bg-light ${styles.child}`}>
                        <img src={book} className={``}/>
                        <div className={`d-flex`}>
                          <p>Level 1</p>
                          <p>stars</p>
                          <p> Completed</p>
                        </div>
                       </div>
                    </div>
                  </div>
                ) :
                  step==2 ? (
                    <div className={`${styles.firstLeft} d-none d-sm-block`}>
                        <h1>Discover Resources - Your Gateway to Valuable & Useful information.</h1>
                        <img src={grp} className={` ${styles.grp}`}/>

                  </div>
                ): (
                  <div className={`${styles.firstLeft} d-none d-sm-block`}>
                  <h1>Test Your Skills - Periodic Assessments to Showcase Growth.</h1>
                      <img src={doctor} className={` ${styles.grp}`}/>

                </div>

                )}
        </div>
      
      <div className={`col-sm-6 p-0 col-12  ${styles.signup} `}>

        <div className={` ${styles.rightdiv}`}>
        { step==1 ? (
          <div className={`${styles.fillspace}`}>
            <img src={progressone} className={`   ${styles.progressbar}`}/>
            <h4 className={`${styles.question}`}>What is your age ?</h4>
            <div key={1} onClick={()=>selectAge(1)} className={`${styles.response} `}>18-25</div>
            <div key={2} onClick={()=>selectAge(2)} className={`${styles.response} `}>25-40</div>
            <div key={3} onClick={()=>selectAge(3)} className={`${styles.response} `}>40-55</div>
            <div key={4} onClick={()=>selectAge(4)} className={`${styles.response} `}>55+</div>
          </div> ) : 
          step == 2 ? (
            <div className={`${styles.fillspace}`}>
            <img src={progresstwo} className={`   ${styles.progressbar}`}/>
            <h4 className=''>That's great now can you tell us the name of your country ?</h4>
     
            <Select options={countryOptions}   id="country-select"  onChange={selectCountry}
              value={selectedCountryOption} 
              className={`${styles.response} `} />
          </div>
          ) : (
            <div className={`${styles.fillspace}`}>
            <img src={progressthree} className={`   ${styles.progressbar}`}/>
            <h4 className=''>Which languages do you speak ?</h4>
           
            <Select options={languageOptions} 
            className={`${styles.response} `}
             value={selectedLanguageOptions} id="language-select" onChange={selectLanguage} isMulti 
              />
          </div>
          )}
          <div  className={`${styles.btns} `}>
            <input type="button" onClick={decrementStep} disabled={step === 1} value="Back" className={`${styles.prev}`}/>
            <input type="button" onClick={step<3 ? incrementStep: onboard} value="Next" className={`${styles.next}`}/>
          </div>
      

        </div>
      </div>
      </div>
    </div>
   
  )
}

export default OnbordingPage
