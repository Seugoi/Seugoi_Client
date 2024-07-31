import { useEffect, useState } from 'react';
import '../../styles/common/Style.css';
import styles from '../../styles/my_study/MakeStudyList.module.css';

import StudyItem from './StudyItem';
import axios from 'axios';

function MakeStudyList() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function makeStudy() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/users/1/study`);
                if (response.status === 200) {
                    console.log("만든 스터디 조회 성공");
                    setData(response.data);
                } else {
                    console.log("만든 스터디 조회 실패", response.status);
                }
            } catch(err) {
                console.error(err);
            }
        }
        makeStudy();
    }, []);

    return (
        <div className={styles['container']}>
            {
                data && data.map((item, index) => (
                    <StudyItem data={item} key={index} />
                ))
            }
        </div>
    )
}

export default MakeStudyList;