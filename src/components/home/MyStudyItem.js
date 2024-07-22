import '../../styles/common/Style.css';
import styles from "../../styles/home/MyStudy.module.css"

function MyStudyItem() {
    return (
        <div className={styles['container']}>
            <div className={styles['inner-container']}>
                <div className={styles['img']}>
                    <img src='https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg' />
                </div>
                <div className={styles['content']}>
                    <p>java study 코테</p>
                    <div className={styles['status']}>
                        <p>D-172</p>
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

export default MyStudyItem;