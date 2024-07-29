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
import StudyInfo from './pages/StudyInfo';
import Study from './pages/Study';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/join' element={<Join />} />
        <Route path='/seugoi_kakaoOAuth' element={<Info />} />

        <Route path='/home' element={<Home />} />

        <Route path='/study' element={<Study />} />

        <Route path='/study/1' element={<StudyDetail />} />

        <Route path='/add' element={<TaskNoticeAdd />} />

        <Route path='/my_study' element={<MyStudy />} />

        <Route path='/like_study' element={<LikeStudy />} />

        <Route path='/study_info' element={<StudyInfo />} />

        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
