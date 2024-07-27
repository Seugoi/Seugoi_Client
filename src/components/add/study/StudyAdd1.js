import React, { useState, useRef } from 'react';
import '../../../styles/common/Style.css';
import styles from '../../../styles/add/study/StudyAdd1.module.css';
import { Icon } from '@iconify/react';

import Input from '../Input';
import Button from '../Button';

function StudyAdd() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const fileInputRef = useRef(null);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleFileInputClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className={styles.container}>
            <div className={styles['task-img']} onClick={handleFileInputClick}>
                <img
                    src='/images/upload-file.png'
                    alt="upload-file"
                />
                <p>어두운 배경의 사진은 잘 보이지 않습니다</p>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
            />

            <div className={styles['task-title']}>
                <p>스터디 이름</p>
                <Input text="스터디 이름" setContent={setTitle} />
            </div>
            
            <div className={styles['task-title']}>
                <p>카테고리</p>
                <div className={styles.category}>
                    <Input text="# 카테고리 1" setContent={setContent} />
                    <Input text="# 카테고리 2" setContent={setContent} />
                    <Input text="# 카테고리 3" setContent={setContent} />
                </div>
            </div>

            <div className={styles['task-title']}>
                <p>인원</p>
                <div className={styles['flex-box']}>
                    <Icon icon="fluent:person-48-filled" style={{color:'white', fontSize:"1.5rem"}}/>
                    <Input text="최대 인원" setContent={setTitle} />
                </div>
                <div className={styles['check-box']}>
                    <div
                        className={`${styles.option} ${isChecked ? styles.checked : ''}`}
                        onClick={handleCheckboxChange}
                    >
                        {isChecked && (
                            <Icon icon="flowbite:check-outline" width="20" height="20" style={{ color: '#FFF' }} />
                        )}
                    </div>
                    <p>인원 제한 없음</p>
                </div>
            </div>

            <div className={styles['div-button']}>
                <Button text="다음" backgroundColor="#B2B2BB" />
            </div>
        </div>
    );
}

export default StudyAdd;