import React, { useState } from 'react';
import styles from './recruiterprofile.module.css'
import CandidateNavbarComponent from '../../components/CandidateNavbarComponent';

import profileimg from './assets/profileimg.svg'
import edit from './assets/Edit.svg'
import sms from './assets/sms.svg'
import password from './assets/password.svg'
import age from './assets/age.svg'
import gender from './assets/gender.svg'
import phone from './assets/phone.svg'



const RecruiterProfilePage = () => {

  return (
        <div className={`d-flex  ${styles.main}`} >
          <div className={` ${styles.fixednavbar}`}>
          <CandidateNavbarComponent  />
            </div>
            <div className={`mt-5  ${styles.infos}`}>
                <div className={`d-flex bg-light rounded  py-5  px-5 ${styles.boxes}`}>
                    <img src={profileimg}></img>
                    <div className=''>
                        <div className='d-flex align-items-start '>
                        <p className='mx-3'>Jenny Wilson</p>
                        <img  className='mt-1'src={edit}></img>
                        </div>
                        <p className={`mx-3 rounded ${styles.type}`}>Recruiter</p>
                    </div>
                </div>
                <div className={`bg-light rounded py-4 px-4 mt-5 w-100`}>
                    <div className='d-flex justify-content-between'>
                    <h3 className={`${styles.title}`}>Personal Details</h3>
                    <img src={edit}></img>

                    </div>
                    
                    <div className='d-flex flex-wrap  '>
                        <div className={` d-flex mt-3 ${styles.detail}`}>
                            <img src={sms} className={`${styles.detailsicon}`}></img>
                            <div className='mx-3'>
                                <p className='my-0'>Email</p>
                                <p className='my-0'>tiscare@gmail.com</p>
                            </div>
                        </div>
                        <div className={` d-flex mt-3 ${styles.detail}`}>
                            <img src={age} className={`${styles.detailsicon}`}></img>
                            <div className='mx-3'>
                                <p className='my-0'>Age</p>
                                <p className='my-0'>35 Years</p>
                            </div>
                        </div>
                        <div className={` d-flex mt-3 ${styles.detail}`}>
                            <img src={password} className={`${styles.detailsicon}`}></img>
                            <div className='mx-3'>
                                <p className='my-0'>Password</p>
                                <p className='my-0'>***********</p>
                            </div>
                        </div>
                        <div className={` d-flex mt-3 ${styles.detail}`}>
                            <img src={gender} className={`${styles.detailsicon}`}></img>
                            <div className='mx-3'>
                                <p className='my-0'>Gender</p>
                                <p className='my-0'>Female</p>
                            </div>
                        </div>
                        <div className={` d-flex mt-3 ${styles.detail}`}>
                            <img src={phone} className={`${styles.detailsicon}`}></img>
                            <div className='mx-3'>
                                <p className='my-0'>Contact</p>
                                <p className='my-0'>+0000000000</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  );
};

export default RecruiterProfilePage;
