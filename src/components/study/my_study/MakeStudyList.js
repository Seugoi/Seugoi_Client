import { useContext, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import '../../../styles/common/Style.css';
import styles from '../../../styles/study/my_study/MakeStudyList.module.css';

import StudyItem from './StudyItem';

function MakeStudyList() {
    const [data, setData] = useState(null);

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
    
    useEffect(() => {
        makeStudy();
    }, []);

    return (
        <>
            {
                data ?
                (
                    <div className={styles['container']}>
                        {
                            data && data.map((item, index) => (
                                <StudyItem data={item} key={index} />
                            ))
                        }
                    </div>
                ) : (
                    <div className={styles['no-container']}>
                        <div className={styles['no-study']}>
                            <Icon icon='bxs:book' fontSize='40' color='white' opacity='0.5'/>
                            <p>아직 만든 스터디가 없습니다</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MakeStudyList;