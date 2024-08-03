import '../../../styles/common/Style.css';
import styles from '../../../styles/study/detail/Profile.module.css';

function Profile({ data }) {
    return (
        <div className={styles['container']}>
            <div className={styles['img']}>
                <img src={data.profile_img_url} />
            </div>
            <p>{data.nickname}</p>
        </div>
    )
}

export default Profile;