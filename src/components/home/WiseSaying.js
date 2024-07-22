import React from "react";
import styles from "../../styles/home/home.module.css"

export default function WiseSaying() {
    return (
        <div className={styles['wiseSaying']}>
            <div className={styles['marquee']}>
                <p style={{color:'var(--green)', display: 'inline'}}>오늘의 명언 | </p> &nbsp;
                <p style={{display: 'inline'}}>하기 싫은 것을 해야 하고 싶은 것을 할 수 있다</p>
            </div>
        </div>
    )
}