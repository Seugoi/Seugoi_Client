import '../styles/common/Style.css';
import styles from '../styles/study/like_study/LikeStudy.module.css';

import TitleBar from '../components/common/TitleBar';
import LikeStudy from "../components/study/like_study/LikeStudy";

function LikeStudyPage() {
    return (
        <div className={styles['container']}>
            <TitleBar title='' link='/my_page' />
            <LikeStudy />
        </div>
    )
}

export default LikeStudyPage;