import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/splash/Splash.module.css';

function SplashPage() {
  const navigate = useNavigate();  

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/join');
    }, 5000);
  
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles['container']}>
      <img
        src={process.env.PUBLIC_URL + '/images/logo.png'}
        alt="logo"
      />
    </div>
  );
}

export default SplashPage;