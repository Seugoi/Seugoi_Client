import '../../styles/common/Style.css';
import styles from '../../styles/study/StudyView.module.css';

import NumberOfPeople from './NumberOfPeople';
import Profile from './Profile';
import TaskCompletePeople from '../add/TaskCompletePeople';

function StudyView() {
    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                <p>자바를 잘하고 싶으시다고요? <br/> 어렵지 않습니다!</p>
            </div>

            <NumberOfPeople /> 

            <div className={styles['profile']}>
                <Profile />
                <TaskCompletePeople />
            </div>

            <div className={styles['content']}>
                <div className={styles['simple-content']}>
                    <pre>
                        자바를 혼자 공부하려면 금방 포기하게 되고 <br />
                        쉽게 지치신다구요? 그래서 이 스터디를 만들었습니다~
                        <br /> <br />
                        혼자 하기 어려운 개발을 저희와 같이 해봐요!
                    </pre>
                </div>

                <div className={styles['study-introduce']}>
                    <p>저희의 스터디는 이렇게 진행돼요!</p>
                    <div className={styles['div-introduce']}>
                        <div className={styles['introduce1']}>
                            <p>❗</p>
                            <p>매일 한 문제씩 팀장이 제시해주는 문제를 풀어요!</p>
                        </div>
                        <div className={styles['introduce2']}>
                            <p>❗</p>
                            <p>코딩테스트는 프로그래머스 1단계 문제를 풀어요!</p>
                        </div>
                        <div className={styles['introduce3']}>
                            <p>❗</p>
                            <p>문제를 모두 풀면 댓글로 이미지와 함께 인증해요~</p>
                        </div>
                    </div>
                </div>

                <div className={styles['study-content']}>
                    <pre>
                        ‘java study’는 기초를 다지는 것을 중요하게 생각해요! <br />
                        프로그래머스 1단계 문제를 풀어보며 <br />
                        차근차근 실력을 키워나가요 :) <br />
                        <br />
                        끝까지 잘 수행하는 3분을 추첨해 <br />
                        스타벅스 기프티콘 드릴게요! <br />
                        <br />
                        1등 : 스타벅스 아이스 카페 아메리카노 T 2잔 <br />
                                + 부드러운 생크림 카스테라 <br />
                        2등 : 스타벅스 카페 아메리카노 T <br />
                                + 레이어 가나슈 케이크 <br />
                        3등 : 스타벅스 아이스 카페 라떼 T
                    </pre>
                </div>

                <div className={styles['study-suggestion']}>
                    <p>이런 분들에게 좋아요!</p>
                    <div className={styles['div-suggestion']}>
                        <div className={styles['suggestion1']}>
                            <p>💡</p>
                            <p>자바에 관심이 있으신 분</p>
                        </div>
                        <div className={styles['suggestion2']}>
                            <p>💡</p>
                            <p>자바 코딩테스트를 하고싶으신 분</p>
                        </div>
                        <div className={styles['suggestion3']}>
                            <p>💡</p>
                            <p>다같이 공부를 하고싶으신 분</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyView;