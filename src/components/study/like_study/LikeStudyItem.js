import { Icon } from '@iconify/react';
import '../../styles/common/Style.css';
import styles from '../../styles/like_study/LikeStudyItem.module.css';
import { useState } from 'react';

function LikeStudyItem() {
    const [clickedIcon, setClickedIcon] = useState('iconamoon:bookmark-fill');

    const clickIcon = () => {
        setClickedIcon(prevIcon => 
            prevIcon === 'iconamoon:bookmark-fill' 
            ? 'iconamoon:bookmark-light' 
            : 'iconamoon:bookmark-fill'
        );
    }

    return (
        <div className={styles['container']}>
            <div className={styles['inner-container']}>
                <div className={styles['img']}>
                    <img src='https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg' />
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
                        <p>java를 꽉 java</p>
                        <p>#java #개발 #코딩</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikeStudyItem;