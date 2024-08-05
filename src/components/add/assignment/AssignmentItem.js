import { Icon } from '@iconify/react';
import '../../../styles/common/Style.css';
import styles from '../../../styles/add/task/TaskItem.module.css';
import TaskCompletePeople from '../TaskCompletePeople';
import Images from '../task/Images';

function AssignmantItem({ isSubmitted }) {
    return (
        <div className={styles['container2']}>
            <div className={styles['top']}>
                <div className={styles['status']}>
                    <p>5일차</p>
                    <p className={isSubmitted ? styles['statusGreen'] : styles['statusRed']}>
                        <Icon icon={isSubmitted ? "bx:check-circle" : "bx:x-circle"} />
                        {isSubmitted ? '제출한 과제' : '미제출한 과제'}
                    </p>
                </div>
                <div className={styles['title']}>
                    <p>바탕화면 정리</p>
                    <p>~ 2024.06.28</p>
                </div>
                <p className={styles['content']}>
                    드디어 java study를 시작한지 5일이 되었습니다 :)
                    오늘도 화이팅!
                </p>
                <Images large={true} />
                <div className={styles['link']}>
                    <Icon icon="gravity-ui:link" fontSize="16" />
                    <p>참고 링크</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default AssignmantItem;