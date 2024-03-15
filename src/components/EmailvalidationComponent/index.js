
import { useParams } from 'react-router-dom'
import styles from './emailconfirm.module.css'
import { useEffect } from 'react'; // Import useEffect
import { useNavigate } from 'react-router-dom';
import sendmail from "./sendmail.svg"
import axios from 'axios';

const EmailvalidationComponent = () => {
  let navigate = useNavigate();
  const redirectToAnotherPage = () => {
    navigate('/signin'); // Replace with your actual path
  };
  const { token } = useParams(); // Extract the token parameter from the URL

    useEffect(() => {
      // Define your Axios call here
      const verifyEmail = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/tokenvalidation?token=${token}`); // Adjust the API endpoint as necessary
          console.log(response.data); // Handle the response as needed
          // Redirect or show a message based on the response, if necessary
        } catch (error) {
          console.error("There was an error verifying the email:", error);
          // Handle the error, possibly redirect or show an error message
        }
      };
  
      verifyEmail(); // Execute the function to verify email with the token
    }, [token]);
  return (
    <section className={`${styles.main}`}>
    <img src={sendmail}></img>
    <h2>Email Verified</h2>
    <p>Lorem ipsum dolor sit amet consectetur. Vitae sit felis aliquam semper lorem faucibus eget eu. Gravida quis nisl ac amet turpis a. </p>

    <div className={`${styles.loginredirect}`}>
    <button className={`${styles.resend}` } onClick={redirectToAnotherPage}>Done</button>

    </div>


  </section> 
  )
}
export default EmailvalidationComponent