import React from 'react'
import FirstPageLeftComponent from '../../components/FirstPageLeftComponent'
import SignupCompnent from '../../components/signup'
import styles from './style.module.css'
import rightarrow from './assets/rightarrow.svg'
import star from './assets/star.svg'
import savannah from './assets/savannah.svg'

function SignupSecondPage({goToNextStep}) {
  return (

    <div class={`container-fluid ${styles.maincontainer} `}>
      <div className="row ">
        <div className="col-sm-6 ">
        <div className={`${styles.main}`}>
                <div  className={`${styles.logo}`} ></div>
                <h1 className=''>Hey ! <br/>Thanks for Singning up.</h1>
                <p>Are you excited for your amazing future?</p>    

                <div className={`${styles.forward}`}>
                  <p>Let's move forward on our journey together</p>
                  <div className={`d-flex justify-content-end mt-5 `}>
                    <p className=' p-0  mt-3  ' onClick={goToNextStep}>Let's move forward</p>
                    <img src={rightarrow} className={`  ${styles.arrow}  `}/>
                  </div>
                </div>
                
         </div>
        </div>
     
      <div className="col-sm-6 p-0 col-12 m-0 ">
        <div className={`${styles.rightcol}`}>
          <div className={`${styles.stars}`}>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
          </div>
          <p>"Shingai has been a game-changer in my journey to secure a PSW job in Canada.
             Its personalized job matching, informative resources, and timely updates have made the process so much smoother.
              I can't thank Shingai enough for helping me find the perfect opportunity and making my dream a reality.
               This platform truly cares about its users and their success."</p>

          <div className={`w-50 d-flex align-items-center pb-3  mt-5 mb-5`}>
            <img src={savannah} className={` pe-3 w-25`}/>
            <div className={`${styles.savdetails}`}>
              <p className={`p-0 m-0`}>Savannah Nguyen</p>
              <span className={`p-0 m-0`}>Nurse, Health Care</span>
            </div>            

          </div>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default SignupSecondPage
