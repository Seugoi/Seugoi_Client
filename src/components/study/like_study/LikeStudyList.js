import '../../styles/common/Style.css';
import styles from '../../styles/like_study/LikeStudyList.module.css';

import LikeStudyItem from './LikeStudyItem';

function LikeStudyList() {
    return (
        <div className={styles['container']}>
            <LikeStudyItem />
            <LikeStudyItem />
            <LikeStudyItem />
            <LikeStudyItem />
        </div>
    )
}

export default LikeStudyList;