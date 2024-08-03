import '../../../styles/common/Style.css';
import styles from '../../../styles/study/my_study/StudyItem.module.css';

function StudyItem({ data }) {
    return (
        <div className={styles['container']}>
            <div className={styles['inner-container']}>
                <div className={styles['img']}>
                    <img src={data.image} />
                </div>
                <div className={styles['content']}>
                    <p>{data.title}</p>
                    <div className={styles['status']}>
                        <p>D-{data.Dday}</p>
                        <p>현재 진행상황</p>
                    </div>
                    <div className={styles['progress-bar']}>
                        <div 
                            className={styles['progress']}
                            style={{ width: `50%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyItem;