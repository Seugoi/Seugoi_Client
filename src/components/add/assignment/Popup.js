import { useEffect } from 'react';
import styles from "../../../styles/assignment/Popup.module.css";
import { Icon } from '@iconify/react';

export default function Popup({ files, onClose, onRemoveFile }) {
    useEffect(() => {
        if (files.length === 0) {
            onClose();
        }
    }, [files, onClose]);

    const handleRemoveFile = (index) => {
        onRemoveFile(index);
    };

    return (
        <div className={styles['background']}>
            <div className={styles['popup']}>
                <div className={styles['popup-content']}>
                    {files.map((file, index) => (
                        <div key={index} className={styles['file-preview']}>
                            <img src={file.url} alt={`Selected ${index}`} className={styles['selected-image']} />
                            <div 
                                className={styles['delete-button']} 
                                onClick={() => handleRemoveFile(index)}
                                aria-label="Remove file"
                            >
                                <Icon icon="bx:x-circle" className={styles['delete-icon']}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
