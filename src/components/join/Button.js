import React from 'react';
import styles from '../../styles/join/Button.module.css';

const Button = () => {
  const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.href = kakaoAuthUrl;
  }

  return (
    <div className={styles['login-button']} onClick={handleLogin}>
        <img
          src='/images/kakaotalk.png'
          alt="kakao"
        />
        <p>카카오로 시작하기</p>
    </div>
  );
}

export default Button;