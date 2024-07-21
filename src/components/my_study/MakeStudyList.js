import '../../styles/common/Style.css';
import styles from '../../styles/my_study/MakeStudyList.module.css';

import StudyItem from './StudyItem';

function MakeStudyList() {
    return (
        <div className={styles['container']}>
            <StudyItem />
        </div>
    )
}

export default MakeStudyList;