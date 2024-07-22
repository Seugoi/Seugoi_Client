import React from 'react';
import styles from '../../styles/join/Header.module.css';

function Header() {
  return (
    <div className={styles['box']}>
      <img
        src={process.env.PUBLIC_URL + '/images/logo.png'}
        alt="logo"
      />
      <p className="title">IT관련 스터디들을 한눈에!</p>
    </div>
  );
}

export default Header;