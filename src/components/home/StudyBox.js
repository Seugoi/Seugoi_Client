import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import '../../styles/common/Style.css';
import styles from "../../styles/home/StudyBox.module.css";

function StudyBox() {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleIconClick = () => {
        setIsBookmarked(!isBookmarked);
    };

    return (
        <div className={styles['container']}>
            <div className={styles['inner-container']}>
                <div className={styles['img']}>
                    <img src='https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg' />
                </div>
                <div className={styles['box']}>
                    <Icon 
                        icon={isBookmarked ? "iconamoon:bookmark-fill" : "iconamoon:bookmark-light"} 
                        style={{zIndex: "99", fontSize: "2rem", left: "10px"}} 
                        onClick={handleIconClick}
                    />
                    <div className={styles['content']}>
                        <p>java study 코딩테스트</p>
                        <div className={styles['category']}>
                            <p>#java #코딩테스트 #개발</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudyBox;
