import '../../../styles/common/Style.css';
import styles from '../../../styles/add/notice/NoticeItem.module.css';

function NoticeItem({ data }) {
    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                <span>📌</span>
                <p>{data.title}</p>
            </div>
            <hr />
            <p>{data.content}</p>
        </div>
    )
}

export default NoticeItem;