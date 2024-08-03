import { useState } from 'react';
import '../../../styles/common/Style.css';
import styles from '../../../styles/study/detail/StudyDetail.module.css';

import TaskView from './TaskView';
import StudyView from './StudyView';

function StudyDetail({ data }) {
    const [selectComponent, setSelectComponent] = useState('study');

    return (
        <div className={styles['div-change']}>
            <div className={styles['select']}>
                <div 
                    className={`${styles['task']} ${selectComponent === 'task' ? styles['clickedTask'] : null}`}
                    onClick={() => setSelectComponent('task')}
                >
                    과제 보기
                </div>

                <div
                    className={`${styles['study']} ${selectComponent === 'study' ? styles['clickedStudy'] : null}`}
                    onClick={() => setSelectComponent('study')}
                >
                    스터디 소개
                </div>
            </div>

            <div className={styles['scroll-content']}>
                { selectComponent === 'task' && <TaskView /> }
                { selectComponent === 'study' && <StudyView data={data} /> }
            </div>
        </div>
    )
}

export default StudyDetail;