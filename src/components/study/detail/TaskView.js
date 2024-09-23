import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../styles/common/Style.css';
import styles from '../../../styles/study/detail/TaskView.module.css';

import NoticeItem from '../../add/notice/NoticeItem';
import TaskItem from '../../add/task/TaskItem';

function TaskView({ study_id }) {
    const [data, setData] = useState(null);

    async function getTaskNotice() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/study/${study_id}/all`);
            if (response.status === 200) {
                console.log("공지, 과제 불러오기 성공");
                setData(response.data);
            } else {
                console.log("공지, 과제 불러오기 실패", response.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getTaskNotice();
    }, []);

    return (
        <div className={styles['container']}>
            {
                data && data.map((item, index) => {
                    { item.type === 'notice' && <NoticeItem data={item} key={index} /> }
                    { item.type === 'task' && <TaskItem data={item} key={index} /> }
                })
            }
        </div>
    )
}

export default TaskView;