import React from "react";
import styles from "../../styles/home/MyStudy.module.css"
import MyStudyItem from "./MyStudyItem";

export default function MyStudyContainer() {
    return (
        <div className={styles['item-container']}>
            <MyStudyItem />
            <MyStudyItem />
            <MyStudyItem />
            <MyStudyItem />
            <MyStudyItem />
            <MyStudyItem />
        </div>
    );
}
