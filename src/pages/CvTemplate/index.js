import React , { useRef } from 'react'
import styles from './style.module.css'
import ReactToPrint from 'react-to-print';
import profileimg from './assets/profileimg.svg'
import emailicon from './assets/email.svg'
import locationicon from './assets/location.svg'
import calendaricon from './assets/calendar.svg'
function CvTemplate() {
    const componentRef = useRef();
   
  return (
    <>
        <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      
      />
    <div class={`container-fluid  ${styles.main} `} ref={componentRef}>
      <div className="row ">
        <div className={`col-sm-6 ${styles.leftside}`}>
            <div className={`${styles.insideleft} ${styles.wordbreak}`}>
                {/* <div className={`${styles.cvimg} `}></div> */}
                <img  src={profileimg} className={`${styles.cvimg}`}></img>
                <h1>Wissem ben hadj khelifa</h1>
                <h5>Personal Support Worker</h5>
                <div className={`${styles.contact}`}>
                    <p className={`${styles.title}`}>CONTACT DETAILS</p>
                    <div className='d-flex'>
                        <img src={emailicon}></img>
                        <p className={`${styles.wordbreak}`}>wissem.benhadjkhelifa@opptunity.com</p>
                    </div>
                    <div className='d-flex'>
                        <img src={calendaricon}></img>
                        <p>09/01/1999</p>
                    </div>
                    <div className='d-flex'>
                        <img src={locationicon}></img>
                        <p className={`${styles.wordbreak} w-75`}>my addressmyaddressmyaddressmyaddressmyaddressmyaddressmy addressmy addressmy addressmy addressmy addressmy addressmy addressmy address</p>
                    </div>
                </div>

                <div className={`${styles.about}`}>
                    <p className={`${styles.title}`}>ABOUT YOU</p>
                    <div className={`${styles.wordbreak}`}>
                    I'm Derek Louis from Africa, passionate about caregiving with a strong background in community support. My experiences have shaped a deep commitment to empathetic, personalized care.
                    </div>
                </div>
                

            </div>
        </div>
     
      <div className={`col-sm-6 p-0 col-12 m-0   ${styles.rightside} `}>
        <div className={`${styles.insideright} ${styles.wordbreak} `}>
        <div className={`${styles.contact}`}>
                <div className='locational'>
                    <p className={`${styles.title} p-0 m-0 mb-3`} >LOCATIONAL INFORMATION</p>
                    <div className='d-flex align-items-start'>
                        <img src={locationicon} className='p-0 m-0'></img>
                        <div className='mx-2'>
                        <p className='p-0 m-0 '>Current location</p>
                        <p className=''>Canada</p>
                        </div>
                        
                    </div>
                    <div className='d-flex align-items-start'>
                        <img src={locationicon} className='p-0 m-0'></img>
                        <div className='mx-2'>
                        <p className='p-0 m-0 '>Nationality</p>
                        <p>Egyptian</p>
                        </div>
                        
                    </div>
                    <div className='d-flex align-items-start'>
                        <img src={locationicon} className='p-0 m-0'></img>
                        <div className='mx-2'>
                        <p className='p-0 m-0'>Expected location</p>
                        <p>London,Toronto</p>
                        </div>
                        
                    </div>
                </div>
                <div className='qualifications'>
                    <p className={`${styles.title} p-0 m-0 mb-3`} >YOUR QUALIFICATIONS</p>
                    <div className='d-flex align-items-start'>
                        <img src={locationicon} className='p-0 m-0'></img>
                        <div className='mx-2'>
                        <p className='p-0 m-0 '>Education</p>
                        <p className=''>Higher Secondary Education</p>
                        </div>
                        
                    </div>
                    <div className='d-flex align-items-start'>
                        <img src={locationicon} className='p-0 m-0'></img>
                        <div className='mx-2  w-100'>
                        <p className='p-0 m-0 '>Languages</p>
                        <div className='mx-2'>
                            <ul className={`${styles.languagelist} w-100`} >
                                <li >
                                    <div className={`d-flex justify-content-between w-100`}>
                                        <p className='w-50'>English</p>
                                        <p className={`${styles.level} w-50`}>Advanced</p>
                                    </div>
                                </li>
                                <li >
                                    <div className={`d-flex justify-content-between w-100`}>
                                        <p className='w-50'>English</p>
                                        <p className={`${styles.level} w-50`}>Pro</p>
                                    </div>
                                </li>
                                <li >
                                <div className={`d-flex justify-content-between w-100`}>
                                        <p className='w-50'>English</p>
                                        <p className={`${styles.level} w-50`}>Expert</p>
                                    </div>
                                </li>
                              
                            </ul>
                        </div>
                        </div>
                        
                    </div>

                    <div className='d-flex align-items-start'>
                        <img src={locationicon} className='p-0 m-0'></img>
                        <div className='mx-2 w-100'>
                        <p className='p-0 m-0 '>Skills</p>
                        <div className='mx-2'>
                            <ul className={`${styles.languagelist}  w-100`} >
                                <li >
                                    
                                      
                                        <div className={`d-flex justify-content-between w-100`}>
                                        <p className='w-50'>Empathizing</p>
                                        <p className={`${styles.level} w-50`}>Beginner</p>
                                    
                                    </div>
                                </li>
                                <li >
                                      
                                <div className={`d-flex justify-content-between w-100`}>
                                        <p className='w-50'>House cleaning</p>
                                        <p className={`${styles.level} w-50`}>Advanced</p>
                                    
                                    </div>
                                </li>
                                <li >
                                     
                                <div className={`d-flex justify-content-between w-100`}>
                                        <p className='w-50'>Child Care</p>
                                        <p className={`${styles.level} w-50`}>Beginner</p>
                                    
                                    </div>
                                </li>
                                <li >
                                     
                                <div className={`d-flex justify-content-between w-100`}>
                                        <p className='w-50'>First Aid</p>
                                        <p className={`${styles.level} w-50`}>Pro</p>
                                    
                                    </div>
                                </li>
                                <li >
                                     
                                <div className={`d-flex justify-content-between w-100`}>
                                        <p className='w-50'>Old age care</p>
                                        <p className={`${styles.level} w-50`}>Beginner</p>
                                    
                                    </div>
                                </li>
                               
                              
                             
                            </ul>
                        </div>
                        </div>
                        
                    </div>

                    <div className='d-flex align-items-start'>
                        <img src={locationicon} className='p-0 m-0'></img>
                        <div className='mx-2'>
                        <p className='p-0 m-0 '>Experience</p>
                        <p className=''>0-2 Years</p>
                        <div className='experiences'>
                        {/* start of one exp */}
                            <div>
                                <h5>Teacher & PSW</h5>
                                <div className='d-flex align-items-start'>
                                    <img src={locationicon}></img>
                                    <p className={`${styles.wordbreak}`}>Tennt Government School , Algeriaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaae
</p>
                                </div>
                                <h6>Beginning Date:</h6>
                                <p>22 Jan,2022</p>
                                <h6>End Date</h6>
                                <p>OnGoing</p>
                                <h6>Description</h6>
                                <ul>
                                    <li>Done cleaning as well as teaching</li>
                                    <li>Was head of the primary departement</li>
                                    <li>Done cleaning as well as teaching</li>
                                </ul>

                            </div>

                        {/* end of one exp  */}
                        {/* start of second exp  */}
                        <div>
                                <h5>Teacher & PSW</h5>
                                <div className='d-flex'>
                                    <img src={locationicon}></img>
                                    Tennt Government School , Algeria
                                </div>
                                <h6>Beginning Date:</h6>
                                <p>22 Jan,2022</p>
                                <h6>End Date</h6>
                                <p>OnGoing</p>
                                <h6>Description</h6>
                                <ul>
                                    <li>Done cleaning as well as teaching</li>
                                    <li>Was head of the primary departement</li>
                                    <li>Done cleaning as well as teaching</li>
                                </ul>

                            </div>

                        {/* end of second exp  */}
                        </div>

                        </div>
                        
                    </div>
                   
                </div>
                   
                    
                </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default CvTemplate
