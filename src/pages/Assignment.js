// Assignment.js
import React, { useState } from 'react';
import AssignmentBar from "../components/add/assignment/AssignmentBar";
import AssignmantItem from "../components/add/assignment/AssignmentItem";
import TitleBar from "../components/common/TitleBar";
import Popup from "../components/add/assignment/Popup";
import styles from "../styles/assignment/Assignment.module.css";
import Comment from '../components/add/assignment/Comment';

export default function Assignment() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const maxFiles = 5;

    const handleFilesSelected = (files) => {
        if (files.length + selectedFiles.length <= maxFiles) {
            const newFiles = files.map(file => ({
                name: file.name,
                url: URL.createObjectURL(file)
            }));
            setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
            setShowPopup(true);
        } else {
            alert(`최대 ${maxFiles}개 파일만 업로드할 수 있습니다.`);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleRemoveFile = (index) => {
        setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };

    return (
        <>
        <div className={styles['background']}>
            <TitleBar/>
            <AssignmantItem/>
            <Comment/>
            <AssignmentBar onFilesSelected={handleFilesSelected} />
        </div>
            {showPopup && <Popup files={selectedFiles} onClose={handleClosePopup} onRemoveFile={handleRemoveFile} />}
        </>
    );
}
