import React, { useState } from "react";
import { Icon } from "@iconify/react";
import '../../../styles/common/Style.css';
import styles from '../../../styles/add/task/TaskAdd.module.css';

import Input from "../Input";
import ContentInput from "../ContentInput";
import Button from "../Button";

function Task() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');

    return (
        <div className={styles['container']}>
            <div className={styles['task-title']}>
                <p>과제 제목</p>
                <Input text="제목을 입력해주세요" setContent={setTitle} />
            </div>
            
            <div className={styles['task-content']}>
                <p>과제 내용</p>
                <ContentInput text="내용을 입력해주세요" setContent={setContent} />
            </div>

            <div className={styles['task-link']}>
                <p><Icon icon='gravity-ui:link' />링크 추가하기</p>
                <Input text="주소를 넣어주세요" setContent={setLink} />
            </div>

            <div className={styles['task-image']}>
                <p><Icon icon='ic:round-image' />이미지 추가하기</p>
                <div className={styles['image-button']}>
                    <Icon icon='ic:round-plus' fontSize="35"/>
                </div>
            </div>

            <div className={styles['div-button']}>
                <Button text="과제 추가하기" backgroundColor="#B2B2BB" />
            </div>
        </div>
    )
}

export default Task;