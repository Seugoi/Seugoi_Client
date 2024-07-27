import React, { useState } from 'react';
import '../../styles/common/Style.css';
import styles from '../../styles/add/TaskNoticeAdd.module.css';

import StudyStep from './study/StudyStep';
import StudyAdd1 from "./study/StudyAdd1";
import StudyAdd2 from "./study/StudyAdd2";
import StudyTitle from "./study/StudyTitle";

function Study_Add() {

    return (
        <div className={styles['container']}>
            {/* <StudyStep />
            <StudyTitle text="스터디의 기본 정보를<br/> 입력해주세요!" />
            <StudyAdd1 /> */}
            <StudyStep />
            <StudyTitle text="스터디 기간을 설정해주세요!" />
            <StudyAdd2 />
        </div>
    )
}

export default Study_Add;