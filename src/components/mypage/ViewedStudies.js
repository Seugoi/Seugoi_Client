import React from "react";
import StudyBox from "../home/StudyBox";
import styles from "../../styles/mypage/ViewedStudies.module.css"

export default function ViewedStudies() {
    return(
        <div className={styles['container']}>
            <p style={{color:"white", paddingLeft:"5%"}}>최근 조회한 스터디</p>
            <div className={styles['study-container']}>
                <StudyBox/>
                <StudyBox/>
                <StudyBox/>
                <StudyBox/>
                <StudyBox/>
                <StudyBox/>
                <StudyBox/>
                <StudyBox/>
                <StudyBox/>
                <StudyBox/>
            </div>
        </div>
    )
}