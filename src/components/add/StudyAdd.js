import React, { useState } from 'react';
import '../../styles/common/Style.css';
import styles from '../../styles/add/TaskNoticeAdd.module.css';

import StudyStep from './study/StudyStep';
import StudyAdd_1 from "./study/StudyAdd1";
import StudyTitle from "./study/StudyTitle";

function Study_Add() {

    return (
        <div className={styles['container']}>
            <StudyStep />
            <StudyTitle text="스터디의 기본 정보를<br/> 입력해주세요!" />
            <StudyAdd_1 />
        </div>
    )
}

export default Study_Add;