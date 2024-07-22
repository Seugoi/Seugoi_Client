import React from 'react';
import styles from '../styles/join/Join.module.css';

import Header from '../components/join/Header';
import Character from '../components/join/Character';
import Button from '../components/join/Button';

function JoinPage() {
    return (
        <div className={styles['container']}>
          <Header />
          <Character />
          <Button />  
        </div>
    )
}

export default JoinPage;