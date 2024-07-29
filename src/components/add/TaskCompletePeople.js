import { Icon } from '@iconify/react';
import '../../styles/common/Style.css'
import styles from '../../styles/add/TaskCompletePeople.module.css';

function TaskCompletePeople() {
    return (
        <div className={styles['container']}>
            <div className={styles['person1']}>
                <img src='https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg' />
            </div>
            <div className={styles['person2']}>
                <img src='https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg' />
            </div>
            <div className={styles['person3']}>
                <Icon icon="ri:more-fill" fontSize="14" color='white' style={{marginLeft:'2px'}}/>
                <img src='https://3ba1f5b2.rocketcdn.me/wp-content/uploads/2012/01/Difference-Between-Example-and-Sample.jpg' />
            </div>
        </div>
    )
}

export default TaskCompletePeople;