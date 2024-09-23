import React from "react";

import styles from "../../styles/home/MyStudy.module.css"
import MyStudyItem from "./MyStudyItem";

export default function MyStudyContainer({ data }) {
    return (
        <div className={styles['item-container']}>
            {
                data ? data.map((item, index) => (
                    <MyStudyItem data={item.study} key={index} />
                )) : (
                    <p style={{ color: 'white', marginBottom: '5%' }}>현재 진행중인 스터디가 존재하지 않습니다.</p>
                )
            }
        </div>
    );
}
