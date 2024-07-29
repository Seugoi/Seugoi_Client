import '../../styles/common/Style.css';
import styles from '../../styles/mypage/Profile.module.css';

function Profile() {
    return (
        <div className={styles['container']}>
            <div className={styles['img']}>
                <img src='https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg' />
            </div>
            <div className={styles['name-box']}>
                <p>최보람님</p>
                <div className={styles['edit-profile']}>프로필 수정</div>
            </div>
        </div>
    )
}

export default Profile;