import '../styles/common/Style.css';
import styles from '../styles/study/detail/StudyDetail.module.css';
import TitleBar from "../components/common/TitleBar";
import StudyImage from '../components/study/detail/StudyImage';
import StudyDetail from "../components/study/detail/StudyDetail";
import AddButton from '../components/study/detail/AddButton';

function StudyDetailPage() {
    return (
        <div className={styles['container']}>
            <TitleBar text='' link='/home' />
            <StudyImage />
            <StudyDetail />
            <AddButton />
        </div>
    )
}

export default StudyDetailPage;