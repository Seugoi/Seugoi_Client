import React from "react";

import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Profile from "../components/mypage/Profile";
import styles from "../styles/mypage/mypage.module.css"
import ViewedStudies from "../components/mypage/ViewedStudies";
import Button from "../components/add/Button";

export default function MyPage() {

    const navigate = useNavigate();

    const handleLikeStudy = () => {
        navigate("/like_study");
    };
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
                        <Button text="과제 추가하기" backgroundColor="#30343F" />
                    </div>
                </div>
            </div>
    )
}