import '../../../styles/common/Style.css';
import styles from '../../../styles/study/detail/StudyImage.module.css';

function StudyImage({ data }) {
    if (!data) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className={styles['container']}>
            <img src={data.image} />
            <div className={styles['study-info']}>
                <div className={styles['info']}>
                    <p>{data.name}</p>
                    <p>#{data.category.tag1} #{data.category.tag2}</p>
                </div>
                <div className={styles['D-day']}>
                    <p>D-{data.Dday}</p>
                </div>
            </div>
        </div>
    )
}

export default StudyImage;