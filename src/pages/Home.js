import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';

import styles from "../styles/home/home.module.css"
import Calendar from "../components/home/Calendar";
import MyStudyContainer from "../components/home/MyStudyContainer";
import CategoryContainer from "../components/home/CategoryContainer";
import WiseSaying from "../components/home/WiseSaying"
import StudyContainer from "../components/home/StudyContainer";

export default function Home() {
    const userId = useSelector(state => state.userId);

    const [statusStudyData, setStatusStudyData] = useState(null);
    const [allStudyData, setAllStudyData] = useState(null);
    const [userInfoData, setUserInfoData] = useState(null);

    // 현재 진행중인 스터디 서버 연결
    const statusStudy = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${userId}/join`);
            if (response.status === 200) {
                console.log("현재 진행중인 스터디 불러오기 성공");
                setStatusStudyData(response.data);
            } else {
                console.log("현재 진행중인 스터디 불러오기 실패", response.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    // 요즘 뜨고있는 스터디 서버 연결
    const allStudy = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/study`);
            if (response.status === 200) {
                console.log("요즘 뜨고있는 스터디 불러오기 성공");
                setAllStudyData(response.data);
            } else {
                console.log("요즘 뜨고있는 스터디 불러오기 실패", response.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    // 유저 정보 서버 연결
    const userInfo = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${userId}`);
            if (response.status === 200) {
                console.log("유저 정보 불러오기 성공");
                setUserInfoData(response.data);
            } else {
                console.log("유저 정보 불러오기 실패", response.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        userInfo();
        statusStudy();
        allStudy();
    }, []);

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
                <h2 style={{lineHeight:"33px"}}>{userInfoData && userInfoData.nickname}님이<br/>현재 진행중인 스터디</h2>
            </div>
            <MyStudyContainer data={statusStudyData} />
            <WiseSaying/>
            <div>
                <div style={{display:"flex", padding:"0 25px", columnGap:"5px", color:"white"}}>
                    <Icon icon="bxs-bar-chart-alt-2" style={{fontSize:"1.3rem"}}/>
                    <h3>요즘 뜨고있는</h3>
                </div>
                <CategoryContainer/>
            </div>
            <div className={styles['body']}>
                <StudyContainer data={allStudyData}/>
            </div>
        </div>
    )
}