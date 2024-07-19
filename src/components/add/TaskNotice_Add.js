import React, { useState } from 'react';
import '../../styles/common/Style.css';
import styles from '../../styles/add/TaskNotice_Add.module.css';

import Task from "./task/Task";
import Notice from './notice/Notice';
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
                    <div className={styles['task-add']} onClick={() => select('task')}>
                        과제 추가
                    </div>

                    <div className={styles['notice-add']} onClick={() => select('notice')}>
                        공지 추가
                    </div>
                </div>

                { addSelect === 'task' && <Task /> }
                { addSelect === 'notice' && <Notice /> }
            </div>

        </div>
    )
}

export default TaskNotice_Add;