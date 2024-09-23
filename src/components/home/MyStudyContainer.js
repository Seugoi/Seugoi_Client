import React from "react";

import styles from "../../styles/home/MyStudy.module.css"
import MyStudyItem from "./MyStudyItem";

export default function MyStudyContainer({ data }) {
    return (
        <div className={styles['item-container']}>
            {
                data && data.map((item, index) => (
                    <MyStudyItem data={item.study} key={index} />
                ))
            }
        </div>
    );
}
