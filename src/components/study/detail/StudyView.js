import '../../../styles/common/Style.css';
import styles from '../../../styles/study/detail/StudyView.module.css';

import NumberOfPeople from './NumberOfPeople';
import Profile from './Profile';
import TaskCompletePeople from '../../add/TaskCompletePeople';

function StudyView({ data }) {
    if (!data) {
        return <div>Loading...</div>;
    }

    const {
        title = "이름없음",
        peopleNumber = null,
        user = {},
        simple_content = "",
        study_content = {},
        detail_content = "",
        recom_content = {}
    } = data;

    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                <p>{title}</p>
            </div>

            <NumberOfPeople peopleNumber={peopleNumber} />

            <div className={styles['profile']}>
                <Profile data={user} />
                <TaskCompletePeople />
            </div>

            <div className={styles['content']}>
                <div className={styles['simple-content']}>
                    <pre>
                        {simple_content}
                    </pre>
                </div>

                <div className={styles['study-introduce']}>
                    <p>저희의 스터디는 이렇게 진행돼요!</p>
                    <div className={styles['div-introduce']}>
                        {
                            Object.keys(study_content).map((key, index) => (
                                <div key={index} className={styles[`introduce${index + 1}`]}>
                                    <p>❗</p>
                                    <p>{study_content[key]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={styles['study-content']}>
                    <pre>
                        {detail_content}
                    </pre>
                </div>

                <div className={styles['study-suggestion']}>
                    <p>이런 분들에게 좋아요!</p>
                    <div className={styles['div-suggestion']}>
                        {
                            Object.keys(recom_content).map((key, index) => (
                                <div key={index} className={styles[`suggestion${index + 1}`]}>
                                    <p>💡</p>
                                    <p>{recom_content[key]}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyView;