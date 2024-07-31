import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/common/Style.css';
import styles from '../../styles/my_study/JoinStudyList.module.css';

import StudyItem from './StudyItem';

function JoinStudyList() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function joinStudy() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/users/1/join`);
                if (response.status === 200) {
                    console.log("가입한 스터디 조회 성공");
                    setData(response.data);
                } else {
                    console.log("가입한 스터디 조회 실패", response.status);
                }
            } catch(err) {
                console.error(err);
            }
        }
        joinStudy();
    }, [])

    return (
        <div className={styles['container']}>
            {
                data && data.map((item, index) => (
                    <StudyItem data={item.study} key={index} />
                ))
            }
        </div>
    )
}

export default JoinStudyList;