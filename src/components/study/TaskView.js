import '../../styles/common/Style.css';
import styles from '../../styles/study/TaskView.module.css';

import NoticeList from '../add/notice/NoticeList';

function TaskView() {
    return (
        <div className={styles['container']}>
            <NoticeList />
        </div>
    )
}

export default TaskView;