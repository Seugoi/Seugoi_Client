import '../../../styles/common/Style.css';
import styles from '../../../styles/add/notice/NoticeItem.module.css';

function NoticeItem() {
    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                <span>📌</span>
                <p>공지합니다!!</p>
            </div>
            <hr />
            <p>새로운 문제가 나왔습니다! 문제를 확인해주세요 그리고 4일차 문제 안 푸신 분들 많던데 한번 확인해주세요!</p>
        </div>
    )
}

export default NoticeItem;