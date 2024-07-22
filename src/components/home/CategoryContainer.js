import React, { useState } from 'react';
import CategoryItem from './CategoryItem';
import styles from '../../styles/home/Category.module.css';

export default function CategoryContainer() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const items = [
        "전체",
        "java",
        "UI/UX",
        "MySQL",
        "View.js",
        "three.js",
        "React"
    ];

    return (
        <>
            <div className={styles['category-container']}>
                {items.map((item, index) => (
                    <CategoryItem
                    key={index}
                    content={item}
                    isActive={activeIndex === index}
                    onClick={() => handleClick(index)}
                    />
                    ))}
                    <div className={styles['box']}></div>
            </div>
        </>
    );
}
