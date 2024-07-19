import { useState } from 'react';
import '../../../styles/common/Style.css';
import styles from '../../../styles/add/notice/Notice.module.css';

import Input from '../../common/Input';
import ContentInput from '../ContentInput';
import Button from '../../common/Button';

function Notice() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className={styles['container']}>
            <div className={styles['task-title']}>
                <p>공지 제목</p>
                <Input text="제목을 입력해주세요" setContent={setTitle} />
            </div>
            
            <div className={styles['task-content']}>
                <p>공지 내용</p>
                <ContentInput text="내용을 입력해주세요" setContent={setContent} />
            </div>

            <div className={styles['div-button']}>
                <Button text="공지 추가하기" backgroundColor="#B2B2BB" />
            </div>
        </div>
    )
}

export default Notice;