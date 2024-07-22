import React from "react";
import styles from "../styles/home/home.module.css"
import { Icon } from '@iconify/react';
import Calendar from "../components/home/Calendar";
import MyStudyContainer from "../components/home/MyStudyContainer";
import CategoryContainer from "../components/home/CategoryContainer";
import WiseSaying from "../components/home/WiseSaying"
import StudyContainer from "../components/home/StudyContainer";

export default function Home() {

    return(
        <div style={{overflowX:"hidden", height:"100vh", backgroundColor:"var(--main-color)"}}>
            <div className={styles['body']}>
                <div className={styles['header']}>
                    <img
                        src={process.env.PUBLIC_URL + '/images/logo.png'}
                        alt="logo"
                        style={{width:'35%', height:'15%'}}
                    />
                    <Icon icon="bx-search" style={{color:'white',fontSize:"1.5rem"}}/>
                </div>
                <Calendar/>
                <h2 style={{lineHeight:"33px"}}>이해원님이<br/>현재 진행중인 스터디</h2>
            </div>
            <MyStudyContainer/>
            <WiseSaying/>
            <div>
                <div style={{display:"flex", padding:"0 25px", columnGap:"5px"}}>
                    <Icon icon="bxs-bar-chart-alt-2" style={{fontSize:"1.3rem"}}/>
                    <h3>요즘 뜨고있는</h3>
                </div>
                <CategoryContainer/>
            </div>
            <div className={styles['body']}>
                <StudyContainer/>
            </div>
        </div>
    )
}