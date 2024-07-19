import '../../styles/common/Style.css';
import styles from '../../styles/common/Button.module.css';

function Button({ text, backgroundColor }) {
    return (
        <button className={styles['button']} style={{ backgroundColor: backgroundColor }}>{text}</button>
    )
}

export default Button;