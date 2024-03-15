import React from 'react';
import './style.css'
import EmailConfirmationComponent from '../../components/EmailvalidationComponent';
const ValidatedEmailPage = () => {
  return (
    <div className="welcome-page">
      <EmailConfirmationComponent/>
    </div>
  );
};

export default ValidatedEmailPage;
