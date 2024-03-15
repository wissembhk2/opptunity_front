import React from 'react'
import FirstPageLeftComponent from '../../components/FirstPageLeftComponent'
import styles from './style.module.css'
import SigninCompnent from '../../components/SigninComponent'
function SigninPage() {
  return (

    <div class={`container-fluid  ${styles.main} `}>
      <div className="row ">
        <div className="col-sm-6  ">
        <FirstPageLeftComponent />
        </div>
     
      <div className={`col-sm-6 p-0 col-12 m-0  ${styles.signup} `}>
        <SigninCompnent />
      </div>
      </div>
    </div>
  )
}

export default SigninPage
