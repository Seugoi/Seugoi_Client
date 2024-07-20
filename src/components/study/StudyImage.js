import '../../styles/common/Style.css';
import styles from '../../styles/study/StudyImage.module.css';

function StudyImage() {
    return (
        <div className={styles['container']}>
            <img src="https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg" />
            <div className={styles['study-info']}>
                <div className={styles['info']}>
                    <p>Java Study</p>
                    <p>#java #코딩</p>
                </div>
                <div className={styles['D-day']}>
                    <p>D-40</p>
                </div>
            </div>
        </div>
    )
}

export default StudyImage;