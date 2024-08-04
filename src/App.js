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
import MyChat from "./pages/MyChat";
import SearchChatRoom from "./pages/SearchChatRoom";
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/join' element={<Join />} />
        <Route path='/seugoi_kakaoOAuth' element={<Info />} />

        <Route path='/home' element={<Home />} />

        <Route path='/study' element={<Study />} />

        <Route path='/study/:id' element={<StudyDetail />} />

        <Route path='/add' element={<TaskNoticeAdd />} />

        <Route path='/my_study' element={<MyStudy />} />

        <Route path='/like_study' element={<LikeStudy />} />

        <Route path='/study_info' element={<StudyInfo />} />

        <Route path='/mypage' element={<MyPage />} />

        <Route path="/my_chat" element={<MyChat />} />

<Route path="/search_chat" element={<SearchChatRoom />} />

<Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
