import styles from '../../../styles/add/study/StudyStep.module.css';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';

function StudyStep() {
    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate("/home");
    };

    return (
        <div className={styles['container']}>
            <div className={styles['box']}>
                <div>1</div>
                <div>2</div>
            </div>
            <Icon
                icon="heroicons:home-20-solid"
                style={{color:'#76778B', fontSize:"1.5rem"}}
                onClick={handleIconClick}
            />
        </div>
    );
}

export default StudyStep;