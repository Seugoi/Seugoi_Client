import '../../styles/common/Style.css';
import styles from '../../styles/common/Input.module.css';

function Input({ text, setContent }) {
    return (
        <input placeholder={text} onChange={e => setContent(e.target.value)} className={styles['input']} />
    )
}

export default Input;