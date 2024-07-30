import '../styles/common/Style.css';
import styles from '../styles/like_study/LikeStudy.module.css';

import TitleBar from '../components/common/TitleBar';
import LikeStudy from "../components/like_study/LikeStudy";

function LikeStudyPage() {
    return (
        <div className={styles['container']}>
            <TitleBar title='' link='/mypage' />
            <LikeStudy />
        </div>
    )
}

export default LikeStudyPage;