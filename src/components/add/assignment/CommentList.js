import CommentItem from "./CommentItem"
import styles from "../../../styles/assignment/Comment.module.css"
export default function CommentList() {
    return(
        <div className={styles['commnet-list']}>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
        </div>
    )
}