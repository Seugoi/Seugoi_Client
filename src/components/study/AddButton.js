import { useNavigate } from 'react-router-dom';
import { Icon } from "@iconify/react";
import '../../styles/common/Style.css';
import styles from '../../styles/study/AddButton.module.css';

function AddButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/add');
    }
    
    return (
        <div className={styles['circle']} onClick={handleClick}>
            <Icon icon='ic:round-plus' fontSize='35' color='white' />
        </div>
    )
}

export default AddButton;