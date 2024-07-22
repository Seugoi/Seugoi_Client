import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import StudyDetail from './pages/StudyDetail';
import TaskNoticeAdd from './pages/TaskNoticeAdd';
import MyStudy from './pages/MyStudy';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Join from './pages/Join';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        
        <Route path='/study/1' element={<StudyDetail />} />

        <Route path='/add' element={<TaskNoticeAdd />} />

        <Route path='/my_study' element={<MyStudy />} />

        <Route path='/' element={<Splash />} />

        <Route path='/join' element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
