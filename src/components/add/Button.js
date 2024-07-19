import '../../styles/common/Style.css';
import styles from '../../styles/add/Button.module.css';

function Button({ text, backgroundColor, onClick }) {
    return (
        <button 
            className={styles['button']} 
            style={{ backgroundColor: backgroundColor }} 
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;