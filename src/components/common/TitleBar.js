import React from 'react';
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';
import '../../styles/common/Style.css';
import styles from '../../styles/common/TitleBar.module.css';

function TitleBar({ title, link }) {
    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate(link);
    };

    return (
        <div className={styles['container']}>
            <div className={styles['titleBar-container']}>
                <Icon 
                    icon="formkit:left"
                    fontSize="25px"
                    color="white"
                    onClick={handleIconClick}
                    style={{ cursor: 'pointer' }}
                />
                <div className={styles['title']}>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;