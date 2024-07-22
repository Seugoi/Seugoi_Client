import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import StudyDetail from './pages/StudyDetail';
import TaskNoticeAdd from './pages/TaskNoticeAdd';
import MyStudy from './pages/MyStudy';
import Splash from './pages/Splash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/study/1' element={<StudyDetail />} />

        <Route path='/add' element={<TaskNoticeAdd />} />

        <Route path='/my_study' element={<MyStudy />} />

        <Route path='/' element={<Splash />} />
      </Routes>
    </Router>
  );
}

export default App;
