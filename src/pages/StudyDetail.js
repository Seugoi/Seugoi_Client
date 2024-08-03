import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/common/Style.css';
import styles from '../styles/study/detail/StudyDetail.module.css';

import TitleBar from "../components/common/TitleBar";
import StudyImage from '../components/study/detail/StudyImage';
import StudyDetail from "../components/study/detail/StudyDetail";
import AddButton from '../components/study/detail/AddButton';
import { StudyDetailContext } from '../components/study/detail/StudyDetailProvider';

function StudyDetailPage() {
    const { studyId } = useContext(StudyDetailContext);
    const [data, setData] = useState(null);

    async function studyInfo() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/study/${studyId}`);
            if (response.status === 200) {
                console.log("스터디 정보 조회 성공");
                setData(response.data);
            } else {
                console.log("스터디 정보 조회 실패", response.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        studyInfo();
    }, [])

    return (
        <div className={styles['container']}>
            <TitleBar text='' link='/home' />
            <StudyImage data={data} />
            <StudyDetail data={data} />
            <AddButton />
        </div>
    )
}

export default StudyDetailPage;