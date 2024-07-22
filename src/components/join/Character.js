import React from 'react';
import styles from '../../styles/join/Character.module.css';

function Character() {
  return (
    <img
        src={process.env.PUBLIC_URL + '/images/character.png'}
        className={styles['character']}
        alt="character"
    />
  );
}

export default Character;