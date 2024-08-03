import '../../../styles/common/Style.css';
import styles from '../../../styles/study/like_study/LikeStudy.module.css';

import LikeStudyList from './LikeStudyList';

function LikeStudy() {
    return (
        <div className={styles['inner-container']}>
            <pre className={styles['text']}>
                해원님이 찜한 스터디들을 <br />
                모아봤어요 :)
            </pre>
            
            <div className={styles['scroll-container']}>
                <LikeStudyList />
            </div>
        </div>
    )
}

export default LikeStudy;