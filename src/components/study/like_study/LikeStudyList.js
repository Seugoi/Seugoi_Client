import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import '../../../styles/common/Style.css';
import styles from '../../../styles/study/like_study/LikeStudyList.module.css';

import LikeStudyItem from './LikeStudyItem';

function LikeStudyList() {
    const [data, setData] = useState(null);

    async function likeStudy() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/users/1/like`);
            if (response.status === 200) {
                console.log("찜한 스터디 조회 성공");
                setData(response.data);
            } else {
                console.log("찜한 스터디 조회 실패", response.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        likeStudy();
    }, [])

    return (
        <>
            {
                data ?
                (
                    <div className={styles['container']}>
                        {
                            data && data.map((item, index) => (
                                <LikeStudyItem data={item} key={index} likeStudy={likeStudy} />
                            ))
                        }
                    </div>
                ) : (
                    <div className={styles['no-container']}>
                        <div className={styles['no-study']}>
                            <Icon icon='bxs:book' fontSize='40' color='white' opacity='0.5'/>
                            <p>아직 찜한 스터디가 없습니다</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default LikeStudyList;