import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios';
import '../../../styles/common/Style.css';
import styles from '../../../styles/study/like_study/LikeStudyItem.module.css';

import { StudyDetailContext } from '../detail/StudyDetailProvider';

function LikeStudyItem({ data, likeStudy }) {
    const navigate = useNavigate();
    const [clickedIcon, setClickedIcon] = useState('iconamoon:bookmark-fill');
    const { clickedStudyItem } = useContext(StudyDetailContext);

    async function clickLike(study_id) {
        try {
            const request = await axios.post(`${process.env.REACT_APP_HOST}/study/like`, {
                user_id: 1,
                study_id: study_id
            });

            if(request.status === 200) {
                console.log(request.data.message);
                likeStudy();
            } else {
                console.log("찜하기 실패", request.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    const clickIcon = (e) => {
        e.stopPropagation();
        clickLike(data.id);
        setClickedIcon(prevIcon => 
            prevIcon === 'iconamoon:bookmark-fill' 
            ? 'iconamoon:bookmark-light' 
            : 'iconamoon:bookmark-fill'
        );
    }
    
    const click = (id) => {
        navigate(`/study/${id}`);
        clickedStudyItem(id);
    }

    return (
        <div className={styles['container']} onClick={() => click(data.id)}>
            <div className={styles['inner-container']}>
                <div className={styles['img']}>
                    {data && data.image ? (
                        <img src={data.image} />
                    ) : (
                        <img src="/images/logo.png" />
                    )}
                </div>

                <div className={styles['content']}>
                    <div className={styles['icon-container']}>
                        <Icon 
                            icon={`${clickedIcon}`}
                            fontSize="20"
                            color='white'
                            onClick={clickIcon}
                        />
                    </div>
                    <div className={styles['info']}>
                        {data && data.name ? (
                            <p>{data.name}</p>
                        ) : (
                            <p>이름없음</p>
                        )}
                        <p>#{data.category.tag1} #{data.category.tag2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikeStudyItem;