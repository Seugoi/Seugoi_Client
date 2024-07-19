import styles from '../../styles/add/ContentInput.module.css';

function ContentInput({ text, setContent }) {
    return (
        <textarea placeholder={text} onChange={e => setContent(e.target.value)} className={styles['pre']} />
    )
}

export default ContentInput;