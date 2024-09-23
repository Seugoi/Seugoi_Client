import '../../styles/common/Style.css';
import styles from "../../styles/home/MyStudy.module.css"

function MyStudyItem({ data }) {
    return (
        <div className={styles['container']}>
            <div className={styles['inner-container']}>
                <div className={styles['img']}>
                    {
                        data && data.image && (
                            <img src={data.image} />
                        )
                    }
                </div>
                <div className={styles['content']}>
                    <p>{data && data.title}</p>
                    <div className={styles['status']}>
                        <p>D-{data.Dday}</p>
                        <p>현재 진행상황</p>
                    </div>
                    <div className={styles['progress-bar']}>
                        <div 
                            className={styles['progress']}
                            style={{ width: `${data.percent}` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyStudyItem;