import styles from '../../../styles/add/study/StudyTitle.module.css';

function StudyTitle({ text }) {
    return (
        <div className={styles['container']}>
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    );
}

export default StudyTitle;