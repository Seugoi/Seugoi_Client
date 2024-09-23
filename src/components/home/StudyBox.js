import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';

import '../../styles/common/Style.css';
import styles from "../../styles/home/StudyBox.module.css";

function StudyBox({ data }) {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const navigate = useNavigate();
    
    const handleStudy = () => {
        navigate("/study");
    };

    const handleIconClick = () => {
        setIsBookmarked(!isBookmarked);
    };

    return (
        <div className={styles['container']} onClick={handleStudy}>
            <div className={styles['inner-container']}>
                <div className={styles['img']}>
                    <img src='/images/logo.png' />
                </div>
                <div className={styles['box']}>
                    <Icon 
                        icon={isBookmarked ? "iconamoon:bookmark-fill" : "iconamoon:bookmark-light"} 
                        style={{zIndex: "99", fontSize: "2rem", left: "10px", color:"white"}} 
                        onClick={handleIconClick}
                    />
                    <div className={styles['content']}>
                        <p>{data && data.title}</p>
                        <div className={styles['category']}>
                            {
                                data && data.category && Object.keys(data.category).map((key, index) => (
                                    <p key={index}>#{data.category[key]}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyBox;
