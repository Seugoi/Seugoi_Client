import React from 'react';
import styles from '../../styles/join/Button.module.css';

function Button() {
  return (
    <div className={styles['login-button']}>
      <img
        src={process.env.PUBLIC_URL + '/images/kakaotalk.png'}
        alt="kakao"
      />
      <p>카카오로 시작하기</p>
    </div>
  );
}

export default Button;
