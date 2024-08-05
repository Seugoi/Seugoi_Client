import '../../../styles/common/Style.css';
import styles from '../../../styles/assignment/CommentItem.module.css';
import Images from '../task/Images';

export default function CommentItem({ isSubmitted, isRejected }) {
    const getStatusDetails = () => {
        if (isRejected) {
            return { className: styles['statusRed'], text: '체크 거절' };
        }
        return isSubmitted 
            ? { className: styles['statusGreen'], text: '체크 완료' }
            : { className: styles['statusGray'], text: '체크 대기중' };
    };

    const { className, text } = getStatusDetails();

    return (
        <div className={styles['container']}>
            <div className={styles['img']}>
                <img src="/img/chat/test.png" alt="Comment" />
            </div>
            <div className={styles['comment-container']}>
                <div className={styles['name-box']}>
                    <div>
                        <p>이해원</p>
                        <p>2024.06.28</p>
                    </div>
                    <p className={className}>
                        {text}
                    </p>
                </div>
                <div className={styles['comment-box']}>
                    <p>완전 껌이네유(병석 ㅋ) 이런걸 문제라고 내시는지..</p>
                    <Images/>
                </div>
            </div>
        </div>
    );
}
