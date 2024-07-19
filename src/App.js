import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import StudyDetail from './pages/StudyDetail';
import TaskNoticeAdd from './pages/TaskNoticeAdd';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/study/1' element={<StudyDetail />} />

        <Route path='/add' element={<TaskNoticeAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
