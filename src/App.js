import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import StudyDetail from './pages/StudyDetail';
import TaskNoticeAdd from './pages/TaskNoticeAdd';
import MyStudy from './pages/MyStudy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/study/1' element={<StudyDetail />} />

        <Route path='/add' element={<TaskNoticeAdd />} />

        <Route path='/my_study' element={<MyStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
