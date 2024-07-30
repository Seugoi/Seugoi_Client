import '../styles/common/Style.css';
import styles from '../styles/add/TaskNoticeAdd.module.css';
import TaskNoticeAdd from '../components/add/TaskNoticeAdd';
import TitleBar from '../components/common/TitleBar';

function TaskNoticeAddPage() {
    return (
        <div className={styles['container']}>
            <TitleBar title="과제 / 공지 추가" link='/study/1' />
            <TaskNoticeAdd />
        </div>
    )
}

export default TaskNoticeAddPage;