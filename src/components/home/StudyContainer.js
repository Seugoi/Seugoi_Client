import React from "react";

import StudyBox from "./StudyBox";
import styles from "../../styles/home/StudyBox.module.css"

export default function StudyContainer({ data }) {
    return (
        <div className={styles['box-container']}>
            {
                data && data.map((item, index) => (
                    <StudyBox data={item.study} key={index} />
                ))
            }
        </div>
    )
}