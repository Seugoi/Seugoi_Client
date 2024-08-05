import React from 'react';
import '../../../styles/common/Style.css';
import styles from '../../../styles/add/task/Images.module.css';

function Images({ large = false }) {
    const imageCount = 5;
    const isLastImgFaded = imageCount > 3;

    return (
        <div className={styles['container']}>
            {Array.from({ length: imageCount - (imageCount - 3) }).map((_, index) => (
                <div key={index} className={`${styles['img']} ${large ? styles['largeImg'] : ''}`}>
                    <img src='/images/studyAdd.png' style={{ opacity: `${index === 2 && isLastImgFaded ? '0.5' : '1'}` }} />
                    {index === 2 && isLastImgFaded && <p>+ {imageCount - 3}</p>}
                </div>
            ))}
        </div>
    );
}

export default Images;
