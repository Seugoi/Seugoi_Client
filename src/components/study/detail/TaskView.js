import '../../../styles/common/Style.css';
import styles from '../../../styles/study/detail/TaskView.module.css';

import NoticeList from '../../add/notice/NoticeList';
import TaskList from '../../add/task/TaskList';

function TaskView() {
    return (
        <div className={styles['container']}>
            <NoticeList />
            <TaskList />
        </div>
    )
}

export default TaskView;