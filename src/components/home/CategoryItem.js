// CategoryItem.jsx
import React from 'react';
import styles from '../../styles/home/Category.module.css';

const CategoryItem = ({ content, isActive, onClick }) => {
    return (
        <div
            className={`${styles['category-item']} ${isActive ? styles.active : styles.category}`}
            onClick={onClick}
        >
            {content}
        </div>
    );
};

export default CategoryItem;
