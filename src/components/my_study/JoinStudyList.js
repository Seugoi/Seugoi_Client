import '../../styles/common/Style.css';
import styles from '../../styles/my_study/JoinStudyList.module.css';

import StudyItem from './StudyItem';

function JoinStudyList() {
    return (
        <div className={styles['container']}>
            <StudyItem />
            <StudyItem />
        </div>
    )
}

export default JoinStudyList;