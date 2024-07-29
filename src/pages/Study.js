import React from "react";
import StudyView from "../components/study/StudyView";
import '../styles/common/Style.css';
import styles from '../styles/study/StudyDetail.module.css';
import TitleBar from "../components/common/TitleBar";
import StudyImage from "../components/study/StudyImage";
import Button from "../components/add/Button";

export default function Study() {
    return(
        <div className={styles["containerStudy"]}>
            <TitleBar text='' link='' />
            <StudyImage />
            <div className={styles['div-change']}>
                <StudyView/>
                <div className={styles['div-button']}>
                    <Button text="과제 추가하기" backgroundColor="var(--green)" />
                </div>
            </div>
        </div>
    )
}