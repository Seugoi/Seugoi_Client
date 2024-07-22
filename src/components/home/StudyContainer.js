import React from "react";
import StudyBox from "./StudyBox";
import styles from "../../styles/home/StudyBox.module.css"

export default function StudyContainer() {
    return(
        <div className={styles['box-container']}>
            <StudyBox text="java" category1="d" category2="1212" category3="asdgsdg"/>
            <StudyBox text="java" category1="d" category2="1212" category3="asdgsdg"/>
            <StudyBox text="java" category1="d" category2="1212" category3="asdgsdg"/>
            <StudyBox text="java" category1="d" category2="1212" category3="asdgsdg"/>
            <StudyBox text="java" category1="d" category2="1212" category3="asdgsdg"/>
        </div>
    )
}