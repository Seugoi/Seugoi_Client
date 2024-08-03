import { createContext, useState } from "react";

export const StudyDetailContext = createContext();

function StudyDetailProvider({ children }) {
    const [studyId, setStudyId] = useState(null);

    const clickedStudyItem = (id) => {
        setStudyId(id);
    }

    return (
        <StudyDetailContext.Provider value={{ studyId, clickedStudyItem }}>
            { children }
        </StudyDetailContext.Provider>
    )
}

export default StudyDetailProvider;