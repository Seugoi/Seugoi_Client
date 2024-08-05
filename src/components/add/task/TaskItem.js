import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/common/Style.css';
import styles from '../../../styles/add/task/TaskItem.module.css';

import TaskCompletePeople from '../TaskCompletePeople';
import Images from './Images';

function TaskItem() {
    const navigate = useNavigate();

    const itemClick = () => {
        navigate('/assignment');
    }

    return (
        <div className={styles['container']} onClick={itemClick}>
            <div className={styles['top']}>
                <div className={styles['status']}>
                    <p>5일차</p>
                    <p>전원 제출</p>
                </div>
                <div className={styles['title']}>
                    <p>바탕화면 정리</p>
                    <p>~ 2024.06.28</p>
                </div>
                <p className={styles['content']}>
                    드디어 java study를 시작한지 5일이 되었습니다 :)
                    오늘도 화이팅!
                </p>
                <Images />
                <div className={styles['link']}>
                    <Icon icon="gravity-ui:link" fontSize="16" />
                    <p>참고 링크</p>
                </div>
            </div>
            <hr />
            <div className={styles['bottom']}>
                <div className={styles['comment']}>
                    <Icon icon="fluent:chat-24-filled" fontSize="21" />
                    <p>과제 댓글</p>
                </div>
                <TaskCompletePeople />
            </div>
        </div>
    )
}

export default TaskItem;