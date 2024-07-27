import React, { useState, useRef } from 'react';
import '../../../styles/common/Style.css';
import styles from '../../../styles/add/study/StudyAdd2.module.css';

import Calendar from '../../home/Calendar';
import Button from '../Button';

function StudyAdd() {

    return (
        <div className={styles['container']}>
            <img
                src='/images/studyAdd.png'
                alt="study-add"
                className={styles['img-box']}
            />
            <Calendar />
            <div className={styles['div-button']}>
                <Button text="다음" backgroundColor="#B2B2BB" />
            </div>
        </div>
    );
}

export default StudyAdd;