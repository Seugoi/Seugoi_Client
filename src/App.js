import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import StudyDetail from './pages/StudyDetail';
import TaskNoticeAdd from './pages/TaskNoticeAdd';
import MyStudy from './pages/MyStudy';
import LikeStudy from './pages/LikeStudy';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Join from './pages/Join';
import Info from './components/join/Info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/join' element={<Join />} />
        <Route path='/seugoi_kakaoOAuth' element={<Info />} />

        <Route path='/home' element={<Home />} />
        
        <Route path='/study/1' element={<StudyDetail />} />

        <Route path='/add' element={<TaskNoticeAdd />} />

        <Route path='/my_study' element={<MyStudy />} />

        <Route path='/like_study' element={<LikeStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
