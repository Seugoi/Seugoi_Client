import '../styles/common/Style.css';
import styles from '../styles/study/StudyDetail.module.css';
import TitleBar from "../components/common/TitleBar";
import StudyImage from '../components/study/StudyImage';
import StudyDetail from "../components/study/StudyDetail";
import AddButton from '../components/study/AddButton';

function StudyDetailPage() {
    return (
        <div className={styles['container']}>
            <TitleBar text='' link='' />
            <StudyImage />
            <StudyDetail />
            <AddButton />
        </div>
    )
}

export default StudyDetailPage;