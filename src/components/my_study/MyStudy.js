import { useState } from 'react';
import '../../styles/common/Style.css';
import styles from '../../styles/my_study/MyStudy.module.css';

import MakeStudyList from './MakeStudyList';
import JoinStudyList from './JoinStudyList';

function MyStudy() {
    const [select, setSelect] = useState('make');

    return (
        <div className={styles['container']}>
            <div className={styles['inner-container']}>
                <div className={styles['selection']}>
                    <p 
                        onClick={() => setSelect('make')}
                        style={{ opacity: select === 'make' ? '1' : '0.5' }}
                    >
                        만든 스터디
                    </p>

                    <p 
                        onClick={() => setSelect('join')}
                        style={{ opacity: select === 'join' ? '1' : '0.5' }}
                    >
                        가입한 스터디
                    </p>
                </div>

                <div className={styles['scroll-container']}>
                    { select === 'make' && <MakeStudyList /> }
                    { select === 'join' && <JoinStudyList /> }
                </div>
            </div>
        </div>
    )
}

export default MyStudy;