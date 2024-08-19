import React from "react";

import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions';

import Profile from "../components/mypage/Profile";
import styles from "../styles/mypage/mypage.module.css"
import ViewedStudies from "../components/mypage/ViewedStudies";
import Button from "../components/add/Button";

export default function MyPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLikeStudy = () => {
        navigate("/study/like");
    };

    const ClickLogoutButton = () => {
        dispatch(logout());
    }

    return(
            <div className={styles['container']}>
                <Profile/>
                <ViewedStudies/>
                <div className={styles['box']}>
                    <div>
                        <div onClick={handleLikeStudy}>
                            <Icon icon="iconamoon:bookmark-fill" color="white"/>
                            <p>찜한 스터디</p>
                        </div>
                        <div>
                            <Icon icon="teenyicons:headset-solid" color="white"/>
                            <p>Q&A</p>
                        </div>
                    </div>
                    <div className={styles['div-button']}>
                        <Button text="로그아웃" backgroundColor="#30343F" onClick={ClickLogoutButton} />
                    </div>
                </div>
            </div>
    )
}