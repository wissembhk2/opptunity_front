
import styles from './emailconfirm.module.css'

import sendmail from "./sendmail.svg"
const EmailConfirmationComponent = () => {
  return (
    <section className={`${styles.main}`}>
    <img src={sendmail}></img>
    <h2>Email Verification</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Vitae sit felis aliquam semper lorem faucibus eget eu. Gravida quis nisl ac amet turpis a. </p>

    <div className={`${styles.loginredirect}`}>
    <button className={`${styles.resend}`}>Resend Email</button>

    </div>


  </section> 
  )
}
export default EmailConfirmationComponent