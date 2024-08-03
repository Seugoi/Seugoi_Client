import { useNavigate } from 'react-router-dom';
import '../../../styles/common/Style.css';
import styles from '../../../styles/study/my_study/StudyItem.module.css';

import { IoInfinite } from "react-icons/io5";

function StudyItem({ data }) {
    const navigate = useNavigate();

    const click = (id) => {
        navigate(`/study/${id}`);
    }

    return (
        <div className={styles['container']} onClick={() => click(data.id)}>
            <div className={styles['inner-container']}>
                <div className={styles['img']}>
                    {data && data.image ? (
                        <img src={data.image} />
                    ) : (
                        <img src="https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg" />
                    )}
                </div>
                <div className={styles['content']}>
                    {data && data.title ? (
                        <p>{data.title}</p>
                    ) : (
                        <p>제목없음</p>
                    )}
                    <div className={styles['status']}>
                        {data && data.Dday ? (
                            <p>D-{data.Dday}</p>
                        ) : (
                            <p>D- <IoInfinite /></p>
                        )}
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

export default StudyItem;