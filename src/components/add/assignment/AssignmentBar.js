// AssignmentBar.js
import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import styles from "../../../styles/assignment/Bar.module.css";

function AssignmentBar({ onFilesSelected }) {
    const fileInputRef = useRef(null);

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        onFilesSelected(files);
    };

    return (
        <div className={styles['container']}>
            <input type="text" placeholder="과제를 제출해주세요!" className={styles['inputBox']} />
            <Icon icon="ic:round-image" fontSize="24px" onClick={handleIconClick} className={styles['icon']} />
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                multiple
            />
            <Icon icon="carbon:send-filled" className={styles['icon']} />
        </div>
    );
}

export default AssignmentBar;
