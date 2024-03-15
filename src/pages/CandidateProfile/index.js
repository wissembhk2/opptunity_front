import React, { useState,useEffect } from 'react';
import styles from './candidateprofile.module.css'
import CandidateNavbarComponent from '../../components/CandidateNavbarComponent';
import profileimg from './assets/profileimg.svg'
import cv from './assets/CV.svg'
import vid from './assets/Video.svg'
import pencil from './assets/pencil.svg'
import emailicon from './assets/email.svg'
import phoneicon from './assets/phone.svg'
import calendaricon from './assets/calendar.svg'
import locationicon from './assets/location.svg'
import gendericon from './assets/gender.svg'
import flag from './assets/flag.svg'
import ISO6391 from 'iso-639-1';
import Select from 'react-select';
import parseAuthJwt from '../../utils/jsondecoder';

import axios from 'axios';



const CandidateProfilePage = () => {


    const [user,setUser]=useState(parseAuthJwt(localStorage.getItem('token')));

    const [isAddingLanguage, setIsAddingLanguage] = useState(false); // New state to track if adding a new language
    const [isAddingSkill, setIsAddingSkill] = useState(false); // New state to track if adding a new language
    const [userData, setUserData] = useState({
      name:"",
        qualifications :{
        
        skills:[],
        languages: [],
        },
        country:"",

        description : "",
        details:{
          phone:"",
          address:"",
          gender:"",
          birthdate:null,

      },
        current_location:"",

       

        // You can add more user info fields here as needed
      });
      const [tempDescription, setTempDescription] = useState(userData.description);

      const selectLanguage = (selectedOption, index) => {
        if (index < userData.qualifications.languages.length) {
          setUserData(prevState => ({
            ...prevState,
            qualifications: { 
              ...prevState.qualifications, 
              languages: prevState.qualifications.languages.map((language, idx) => idx === index ? selectedOption : language),
            },
          }));
        } else {
          setUserData(prevState => ({
            ...prevState,
            qualifications: {
              ...prevState.qualifications,
              languages: [...prevState.qualifications.languages, selectedOption],
            },
          }));
          
          setIsAddingLanguage(false);
        }
      };

      const selectSkills = (selectedOption, index) => {
        if (index < userData.qualifications.skills.length) {
          setUserData(prevState => ({
            ...prevState,
            qualifications: {
              ...prevState.qualifications,
              skills: prevState.qualifications.skills.map((skill, idx) => idx === index ? selectedOption : skill),
            },
          }));
        } else {
          setUserData(prevState => ({
            ...prevState,
            qualifications: {
              ...prevState.qualifications,
              skills: [...prevState.qualifications.skills, selectedOption],
            },
          }));

          setIsAddingSkill(false);
        }
      };
    const addSkill = () => {
        setIsAddingSkill(true); // Enable the select for a new language
      };

    const addLanguage = () => {
        setIsAddingLanguage(true); // Enable the select for a new language
      };

      const languageOptions = ISO6391.getAllNames().map((name, index) => ({
        label: name,
        value: ISO6391.getAllCodes()[index]
      }));
      const handleDescriptionChange = (event) => {
        setUserData(prevUserData => ({
          ...prevUserData,
          description: event.target.value
        }));
      };
      const handlePhoneChange=(event)=>{
        setUserData(prevUserData => ({
          ...prevUserData,
          details:{
            ...prevUserData.details, // Spread existing details to preserve other fields
            phone: event.target.value // Update the phone field
          }
        }));

      }
      const handleBirthChange=(event)=>{
        setUserData(prevUserData => ({
          ...prevUserData,
          details:{
            ...prevUserData.details, // Spread existing details to preserve other fields
            birthdate: event.target.value // Update the phone field
          }
        }));
      }

      const handleAddressChange=(event)=>{
        setUserData(prevUserData => ({
          ...prevUserData,
          details:{
            ...prevUserData.details, // Spread existing details to preserve other fields
            address: event.target.value // Update the phone field
          }
        }));

      }

      const handleGenderChange=(event)=>{
        setUserData(prevUserData => ({
          ...prevUserData,
          details:{
            ...prevUserData.details, // Spread existing details to preserve other fields
            gender: event.target.value // Update the phone field
          }
        }));

      }
    
      // Handler for the Save button to update the userData with the edited description
      const saveDescription = () => {
       
        setIsEditingDescription(false)
        const postDescription = async () => {
          const url = 'http://127.0.0.1:8000/api/description?email='+user.email;
          
          const data ={'description': userData.description}
          try {
            const response = await axios.post(url, data, {
              headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
            // Handle response data here
          } catch (error) {
            // Handle error here
          }
        };
        postDescription();
      };


    const [isEditingDescription, setIsEditingDescription] = useState(false);

    // Function to toggle isEditing state
    const toggleEdit = () => {
      setIsEditingDescription(!isEditingDescription);
    };
    const [isEditingmore, setIsEditingmore] = useState(false);

    // Function to toggle isEditing state
    const toggleEditmore = () => {
      setIsEditingmore(!isEditingmore);
     
    };

    const [isEditinglocation, setIsEditinglocation] = useState(false);

    // Function to toggle isEditing state
    const toggleEditlocation = () => {
      setIsEditinglocation(!isEditinglocation);
    };
    const [isEditingQualification, setIsEditingQualification] = useState(false);
    const toggleEditQualification = () => {
        setIsEditingQualification(!isEditingQualification);
      };



      const postQualifications = async () => {
        const url = 'http://127.0.0.1:8000/api/qualifications?email='+user.email;
        
        const data = userData.qualifications
        try {
          const response = await axios.post(url, data, {
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
          // Handle response data here
        } catch (error) {
          // Handle error here
        }
        toggleEditQualification()
      };

      const postDetails = async () => {
        const url = 'http://127.0.0.1:8000/api/details?email='+user.email;
        
        const data = userData.details
        try {
          const response = await axios.post(url, data, {
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
          // Handle response data here
        } catch (error) {
          // Handle error here
        }
        toggleEditmore()
      };

      useEffect(() => {
        const fetchUserInfo = async () => {
          const url = `http://127.0.0.1:8000/api/userinfo?email=${user.email}`;
          
          try {
            const response = await axios.get(url, {
              headers: {
                'accept': 'application/json'
              }
            });
            console.log(response.data)
            if (response.data)
            setUserData(prevState => ({

              ...prevState,
              name:response.data.user.name,
              qualifications: {
                skills: response.data.userinfo.skills ? [...response.data.userinfo.skills] : [] ,
                languages:response.data.userinfo.languages ? [...response.data.userinfo.languages] : [],
                
              },
              details:{
                phone:response.data.userinfo.phone,
                address:response.data.userinfo.address,
                gender:response.data.userinfo.gender,
                birthdate:response.data.userinfo.birthdate

              },
              country:response.data.userinfo.country,
              current_location:response.data.userinfo.current_location,
              description:response.data.userinfo.description,
            })); 
           // Store the fetched user info in state
          } catch (error) {
            // Optionally, update your state to indicate an error occurred
          }
        };
    
        fetchUserInfo();
      }, []);



  return (
        <div className={`d-flex justify-content-start ${styles.main}`} >
          <div className={` ${styles.fixednavbar}`}>
          <CandidateNavbarComponent  />
            </div>
            <div className={`${styles.maincontent}`}>
                <div className=' rounded mt-5 d-flex align-items-center justify-content-between w-100 bg-light '>
                    <div className='d-flex w-25 align-items-start'>
                        <img src={profileimg} className={`${styles.profileimg}`}></img>
                        <div className=' mx-3'>
                            <h2>{userData.name}</h2>
                            <p>location fjrfrji</p>
                        </div>
                    </div>
                    <div >
                        <button className={` ${styles.btns} mx-2`}> <img src={cv} className='mx-1'></img><span>View CV</span></button>
                        <button className={` ${styles.btns} mx-2`}> <img src={vid} className='mx-1'></img><span>Upload Video</span></button>
                    </div>

                </div>
                <div className={`d-flex mt-3 align-items-start flex-wrap`}>
                    <div className={` bg-light rounded ${styles.testleft}`}>
                        <p>Personal Details</p>
                        <p>Locationl Information</p>
                        <p>Qualifications</p>
                        <p>Experience</p>

                    </div>
                    <div className={` ${styles.infos}  `}>
                        <div className={` bg-light rounded pb-5 mb-3 ${styles.test}`}>
                        <div className='d-flex justify-content-between'>
                                <h3 className='mx-3 mt-3'>Let's Know You</h3>
                                <img src={pencil} onClick={toggleEditmore} style={{cursor: 'pointer'}} className='mx-3'></img>
                            </div>
                        <div className={`d-flex align-items-start ` }>
                            <img src={emailicon} className='mx-3'></img>
                            <div className='w-100'>
                                <p className='mb-0'>Email</p>
                                {isEditingmore ? ( <input type='text' disabled className={`${styles.inputs} mt-0 w-75`} defaultValue={user.email}></input>)
                                :<p>{user.email}</p>}
                            </div>
                        </div>
                        <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' , width:'90%' , marginLeft:'2%'}} />

                        <div className={`d-flex align-items-start ` }>
                            <img src={phoneicon} className='mx-3'></img>
                            <div className='w-100'>
                                <p className='mb-0'>Mobile Number</p>
                                {isEditingmore ? (   <input type='text'  className={`${styles.inputs} mt-0 w-75`} value={userData.details.phone} onChange={handlePhoneChange} ></input>)
                                : <p>{userData.details.phone }</p>}
                            </div>
                        </div>
                        <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' , width:'90%' , marginLeft:'2%'}} />

                        <div className={`d-flex align-items-start ` }>
                            <img src={calendaricon} className='mx-3'></img>
                            <div className='w-100'>
                                <p className='mb-0'>Birth Date</p>
                                {isEditingmore ? (   <input type='date'  className={`${styles.inputs} mt-0 w-75`} value={userData.details.birthdate} onChange={handleBirthChange}></input>)
                                :<p>{userData.details.birthdate}</p>}
                            </div>
                        </div>
                        <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' , width:'90%' , marginLeft:'2%'}} /> 


                        <div className={`d-flex align-items-start ` }>
                            <img src={locationicon} className='mx-3'></img>
                            <div className='w-100'>
                                <p className='mb-0'>Address</p>
                                {isEditingmore ? (  <textarea type='text'  className={`${styles.inputs} mt-0 w-75`} value={userData.details.address} onChange={handleAddressChange}  ></textarea>)
                                : <p>{userData.details.address}</p>}
                            </div>
                        </div>
                        <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' , width:'90%' , marginLeft:'2%'}} />

                        <div className={`d-flex align-items-start ` }>
                            <img src={gendericon} className='mx-3'></img>
                            <div className='w-100'>
                                <p className='mb-0'>Gender</p>
                                <div className={`${styles.toggle}`}>
                                {isEditingmore ? ( <><input type="radio" id="male" name="gender" checked={userData.details.gender === 'male'} value="male" onChange={handleGenderChange} className={`${styles.inputs} mt-0`} />
                                    <label htmlFor="male" className={`${styles.toggle} ${styles.male}`}>Male</label>
    
                                    <input type="radio" id="female" name="gender" value="female" checked={userData.details.gender === 'female'} onChange={handleGenderChange} className={`${styles.inputs} mt-0`} />
                                    <label htmlFor="female" className={`${styles.toggle} ${styles.female}`}>Female</label>
                                    </> )
                                    :<p>{userData.details.gender}</p>}
                                </div>
                            </div>
                        </div>
                        {isEditingmore ? (<div className={`${styles.tt}`}>
                                    <button className={`${styles.submit} mb-3 mx-3 `} onClick={postDetails} >Save</button>
                                    </div>): <></>}


                        </div>

                        
                        <div className={` bg-light rounded  ${styles.test}`}>
                           <div className='d-flex justify-content-between'>
                                <h3 className='mx-3 mt-3'>More About You</h3>
                                <img src={pencil} onClick={toggleEdit} style={{cursor: 'pointer'}} className='mx-3'></img>
                            </div>
                            {isEditingDescription ? (<div className=''>
                                    <textarea className={`form-control w-75 m-3`} onChange={handleDescriptionChange}>
                                        {userData.description}
                                    </textarea>
                                    <div className={`${styles.tt}`}>
                                    <button className={`${styles.submit} mb-3 mx-3 `} onClick={saveDescription}>Save</button>
                                    <p></p>
                                    </div>
                                    </div>

                                ) : (
                                    <>
                                    <p className='w-75 mx-3'>
                                        {userData.description}
                                    </p>
                                    </>
                                    
                            )}    
                          </div>



                          <div className={` bg-light rounded pb-5 mb-3 ${styles.test}`}>
                        <div className='d-flex justify-content-between'>
                                <h3 className='mx-3 mt-3'>Your Locational Information</h3>
                                <img src={pencil} onClick={toggleEditlocation} style={{cursor: 'pointer'}} className='mx-3'></img>
                            </div>
                        <div className={`d-flex align-items-start ` }>
                        <img src={locationicon} className='mx-3'></img>
                            <div className='w-100'>
                                <p className='mb-0'>Current Location</p>
                                {isEditinglocation ? ( <input type='text' disabled className={`${styles.inputs} mt-0 w-75`} value="your email"></input>)
                                :<p>{userData.current_location}</p>}
                            </div>
                        </div>
                        <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' , width:'90%' , marginLeft:'2%'}} />

                        <div className={`d-flex align-items-start ` }>
                        <img src={flag} className='mx-3'></img>
                            <div className='w-100'>
                                <p className='mb-0'>Nationality</p>
                                {isEditinglocation ? (   <input type='text'  className={`${styles.inputs} mt-0 w-75`} value="your email"></input>)
                                : <p>+21658797589</p>}
                            </div>
                        </div>
                        <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' , width:'90%' , marginLeft:'2%'}} />

                        <div className={`d-flex align-items-start ` }>
                        <img src={locationicon} className='mx-3'></img>
                            <div className='w-100'>
                                <p className='mb-0'>Expected Location</p>
                                {isEditinglocation ? (    <input type='text'  className={`${styles.inputs} mt-0 w-75`} value="your email"></input>)
                                :<p>09/01/1999</p>}
                            </div>
                        </div>


                    
                       
                        {isEditinglocation ? (<div className={`${styles.tt}`}>
                                    <button className={`${styles.submit} mb-3 mx-3 `}>Save</button>
                                    </div>): <></>}


                        </div>


                        <div className={` bg-light rounded pb-5 mb-3 ${styles.test}`}>
                        <div className='d-flex justify-content-between'>
                                <h3 className='mx-3 mt-3'>Your Qualifications</h3>
                                <img src={pencil} onClick={toggleEditQualification} style={{cursor: 'pointer'}} className='mx-3'></img>
                            </div>
                        <div className={`d-flex align-items-center ` }>
                        <img src={locationicon} className='mx-3'></img>
                            <div className='w-100'>
                                <p className='mb-0'>Education</p>
                                {isEditingQualification ? ( <input type='text' disabled className={`${styles.inputs} mt-0 w-75`} value="your email"></input>)
                                :<p><span>Higher School</span><span> (2019) </span></p>}
                            </div>
                        </div>
                        <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' , width:'90%' , marginLeft:'2%'}} />

                        <div className={`d-flex align-items-start ` }>
                        <img src={flag} className='mx-3'></img>

                            <div className='w-75'>

                                <p className='mb-5'>Languages</p>
                                {isEditingQualification ? (  <>
                                    {userData.qualifications.languages.map((language, index) => (
                                        <div key={index} className='d-flex justify-content-between mx-2'>
                                        <Select 
                                            options={languageOptions} 
                                            className={`${styles.inputs} mt-0 w-75`}
                                            id={`language-select-${index}`} // Unique ID for each select
                                            onChange={(selectedOption) => selectLanguage(selectedOption, index)}
                                            value={language} // Set the selected value based on the current item in the map
                                        />
                                        <p>Expert</p>
                                        </div>
                                      ))}        
                          <button onClick={addLanguage}>Add Language</button> {/* Add language button */}
                            
                          {isAddingLanguage && ( // This Select appears only after clicking "Add Language"
                                <div className='d-flex justify-content-between mx-2'>
                                    <Select
                                        options={languageOptions}
                                        className={`${styles.inputs} mt-0 w-75`}
                                        onChange={(selectedOption) => selectLanguage(selectedOption, userData.qualifications.languages.length)}
                                    />
                                    <p>Expert</p>
                                </div>
                            )}
      
                                </>)
                                : <>
                                {userData.qualifications.languages.map((language, index) => (
                                         <div key={index } className='d-flex justify-content-between mx-2'>
                                         <p>{language.label}</p>
                                         <p>Expert</p>
                                     </div>
                                     
                                      ))}  
                               
                               
                                <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' , width:'100%' }} />
                             
                  
                                </>}
                            </div>
                        </div>
                        <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' , width:'90%' , marginLeft:'2%'}} />

                        <div className={`d-flex align-items-start ` }>
                        <img src={flag} className='mx-3'></img>

                            <div className='w-75'>

                                <p className='mb-5'>Skills</p>
                                {isEditingQualification ? (  <>
                                    {userData.qualifications.skills.map((skill, index) => (
                                        <div key={index} className='d-flex justify-content-between mx-2'>
                                        <input
                                            className={`${styles.inputs} mt-0 w-75`}
                                            id={`skill-select-${index}`} // Unique ID for each select
                                            onChange={(e) => selectSkills(e.target.value, index)}
                                                                                        value={skill.label} // Set the selected value based on the current item in the map
                                        />
                                        <p>Expert</p>
                                        </div>
                                      ))}        
                          <button onClick={addSkill}>Add skill</button> {/* Add language button */}
                            
                          {isAddingSkill && ( // This Select appears only after clicking "Add Language"
                                <div className='d-flex justify-content-between mx-2'>
                                    <input
                                        className={`${styles.inputs} mt-0 w-75`}
                                        id="new-skill"
                                    />
                                    <button onClick={() => {
                                                            // Retrieve the value from the input field
                                                            const skillValue = document.getElementById('new-skill').value;
                                                            // Call selectSkills with the retrieved value and the current length of the skills array
                                                            selectSkills({'label':skillValue}, userData.qualifications.skills.length);
                                                        }}>validate</button>
                                    <p>Expert</p>
                                </div>
                            )}
      
                                </>)
                                : <>
                                 
                                {userData.qualifications.skills.map((skill, index) => (
                                         <div key={index } className='d-flex justify-content-between mx-2'>
                                         <p>{skill.label}</p>
                                         <p>Expert</p>
                                     </div>
                                     
                                      ))}  
                               
                               
                             
                  
                                
                                
                                <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' , width:'100%' }} />
                               
                  
                                </>}
                            </div>
                        </div>


                    
                       
                        {isEditingQualification ? (<div className={`${styles.tt}`}>
                                    <button className={`${styles.submit} mb-3 mx-3 ` } onClick={postQualifications}>Save</button>
                                    </div>): <></>}


                        </div>





                          {/* <div className={` bg-warning rounded  ${styles.test}`}>
                           <div className='d-flex justify-content-between'>
                                <h3>Your Experience</h3>
                                <img src={pencil} onClick={toggleEdit} style={{cursor: 'pointer'}}></img>
                            </div>
                            {isEditing ? (<div className=''>
                                    <textarea className={`form-control w-100}`}>
                                    I'm Derek Louis from Africa, passionate about caregiving with a strong background in community support. My experiences have shaped a deep commitment to empathetic, personalized care. Eager to apply my skills in a dynamic healthcare setting, I aim to make a positive impact on those in need of support.
                                    </textarea>
                                    <div className={`${styles.tt}`}>
                                    <button className={`${styles.submit} `}>Save</button>
                                    </div>
                                    </div>

                                ) : (
                                    <>
                                    <p>
                                    I'm Derek Louis from Africa, passionate about caregiving with a strong background in community support. My experiences have shaped a deep commitment to empathetic, personalized care. Eager to apply my skills in a dynamic healthcare setting, I aim to make a positive impact on those in need of support.
                                    </p>
                                    </>
                                    
                            )}    
                          </div> */}
                          

                          
                    </div>

                </div>
            </div>
        </div>
  );
};

export default CandidateProfilePage;
