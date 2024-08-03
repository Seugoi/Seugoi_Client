import React, { useState } from "react";
import { Icon } from "@iconify/react";
import '../../../styles/common/Style.css';
import styles from '../../../styles/add/task/TaskAdd.module.css';

import Input from "../Input";
import ContentInput from "../ContentInput";
import Button from "../Button";
import { LuXCircle } from "react-icons/lu";

function Task() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const [imageURLs, setImageURLs] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files;
        const urls = [];
        const uploadUrls = [];

        const totalImagesCount = imageURLs.length + files.length;

        if (totalImagesCount > 5) {
            alert("이미지는 최대 5개까지 추가할 수 있습니다.");
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith('image/')) {
                const url = URL.createObjectURL(file);
                urls.push(url);
                uploadUrls.push(file);
            }
        }
        setImageURLs(prevURLs => [...prevURLs, ...urls]);
        // onImagesUpload(prevImages => [...prevImages, ...uploadUrls]);
    };

    const removeImage = (indexToRemove) => {
        setImageURLs(prevURLs => prevURLs.filter((url, index) => index !== indexToRemove));
        // onImagesUpload(prevImages => prevImages.filter((file, index) => index !== indexToRemove));
    };


    return (
        <div className={styles['container']}>
            <div className={styles['task-title']}>
                <p>과제 제목</p>
                <Input text="제목을 입력해주세요" setContent={setTitle} />
            </div>
            
            <div className={styles['task-content']}>
                <p>과제 내용</p>
                <ContentInput text="내용을 입력해주세요" setContent={setContent} />
            </div>

            <div className={styles['task-link']}>
                <p><Icon icon='gravity-ui:link' />링크 추가하기</p>
                <Input text="주소를 넣어주세요" setContent={setLink} />
            </div>

            <div className={styles['task-image']}>
                <p><Icon icon='ic:round-image' />이미지 추가하기</p>
                <div className={styles['image-container']}>
                    <label htmlFor='fileInput' className={styles['image-button']}>
                        <Icon icon='ic:round-plus' fontSize="35"/>
                    </label>
                    <input type="file" id="fileInput" multiple onChange={handleFileChange} />
                    {imageURLs.map((item, index) => (
                        <div className={styles['div-image']} key={index}>
                            <div className={styles['div-icon']}> 
                                <LuXCircle 
                                    color="DD5252" 
                                    fontSize='17' 
                                    onClick={() => removeImage(index)} 
                                /> 
                            </div>
                            <div className={styles['imageURL']}>
                                <img
                                    src={item}
                                    alt={`Uploaded Image ${index + 1}`}
                                    id='imgUrl'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles['div-button']}>
                <Button text="과제 추가하기" backgroundColor="#B2B2BB" />
            </div>
        </div>
    )
}

export default Task;