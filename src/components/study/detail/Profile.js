import '../../../styles/common/Style.css';
import styles from '../../../styles/study/detail/Profile.module.css';

function Profile() {
    return (
        <div className={styles['container']}>
            <div className={styles['img']}>
                <img src='https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg' />
            </div>
            <p>최보람</p>
        </div>
    )
}

export default Profile;