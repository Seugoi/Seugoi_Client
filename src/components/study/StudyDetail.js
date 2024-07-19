import { useState } from 'react';
import '../../styles/common/Style.css';
import styles from '../../styles/study/StudyDetail.module.css';

import TitleBar from "../common/TitleBar";
import StudyImage from './StudyImage';
import TaskView from './TaskView';

function StudyDetail() {
    const [selectComponent, setSelectComponent] = useState('task');

    return (
        <div className={styles['container']}>
            <TitleBar text='' link='' />
            <StudyImage />
            
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
                <TaskView />
            </div>
        </div>
    )
}

export default StudyDetail;