import { Icon } from '@iconify/react';
import '../../styles/common/Style.css'
import styles from '../../styles/add/TaskCompletePeople.module.css';

function TaskCompletePeople() {
    return (
        <div className={styles['container']}>
            <div className={styles['person1']}>
                <img src='/images/logo.png' />
            </div>
            <div className={styles['person2']}>
                <img src='/images/logo.png' />
            </div>
            <div className={styles['person3']}>
                <Icon icon="ri:more-fill" fontSize="14" color='white' style={{marginLeft:'2px'}}/>
                <img src='/images/logo.png' />
            </div>
        </div>
    )
}

export default TaskCompletePeople;