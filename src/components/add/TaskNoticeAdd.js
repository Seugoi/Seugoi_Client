import React, { useState } from 'react';
import '../../styles/common/Style.css';
import styles from '../../styles/add/TaskNoticeAdd.module.css';

import TaskAdd from "./task/TaskAdd";
import NoticeAdd from './notice/NoticeAdd';
import TitleBar from '../common/TitleBar';

function TaskNotice_Add() {
    const [addSelect, setAddSelect] = useState('task');

    const select = (value) => {
        setAddSelect(value);
    }

    return (
        <div className={styles['container']}>
            <TitleBar title="과제 / 공지 추가" link="" />
            <div className={styles['div-select']}>
                <div className={styles['select']}>
                    <div className={styles['task-add']} onClick={() => select('task')} style={{ backgroundColor: addSelect === 'task' ? '#252831' : null }}>
                        과제 추가
                    </div>

                    <div className={styles['notice-add']} onClick={() => select('notice')} style={{ backgroundColor: addSelect === 'notice' ? '#252831' : null }}>
                        공지 추가
                    </div>
                </div>

                { addSelect === 'task' && <TaskAdd /> }
                { addSelect === 'notice' && <NoticeAdd /> }
            </div>

        </div>
    )
}

export default TaskNotice_Add;