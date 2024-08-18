import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/common/Style.css';
import styles from '../../../styles/add/task/TaskItem.module.css';

import TaskCompletePeople from '../TaskCompletePeople';
import Images from './Images';

function TaskItem({ data }) {
    const navigate = useNavigate();

    const itemClick = () => {
        navigate('/assignment');
    }

    return (
        <div className={styles['container']} onClick={itemClick}>
            <div className={styles['top']}>
                <div className={styles['status']}>
                    <p>5번째 과제</p>
                    <p className={data.completed ? styles['statusGreen'] : styles['statusRed']}>
                        <Icon icon={data.completed ? "bx:check-circle" : "bx:x-circle"} />
                        {data.completed ? '제출한 과제' : '미제출한 과제'}
                    </p>
                </div>
                <div className={styles['title']}>
                    <p>{data.title}</p>
                    <p>2024.06.28</p> {/* 과제 생성 날짜 */}
                </div>
                <p className={styles['content']}>
                    {data.description}
                </p>
                <Images />
                <div className={styles['link']}>
                    <Icon icon="gravity-ui:link" fontSize="16" />
                    <a>{data.link}</a>
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