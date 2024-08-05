import styles from "../../../styles/assignment/Comment.module.css"
export default function NoComment() {
    return(
        <div className={styles['NoComment']}>
            <img src="/images/sad.png"/>
            <p>과제를 제출하기 전까진 댓글을 볼 수 없습니다 ;(</p>
        </div>
    )
}