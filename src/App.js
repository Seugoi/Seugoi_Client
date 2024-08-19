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
import Assignment from './pages/Assignment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/join' element={<Join />} />
        <Route path='/seugoi_kakaoOAuth' element={<Info />} />

        <Route path='/home' element={<Home />} />

        <Route path='/study' element={<Study />} />
        <Route path='/study/like' element={<LikeStudy />} />
        <Route path='/study/info' element={<StudyInfo />} />
        <Route path='/study/:id' element={<StudyDetail />} />
        <Route path='/study/my' element={<MyStudy />} />

        <Route path='/add' element={<TaskNoticeAdd />} />

        <Route path='/assignment' element={<Assignment />} />

        <Route path="/my_chat" element={<MyChat />} />
        <Route path="/search_chat" element={<SearchChatRoom />} />
        <Route path="/chat" element={<ChatPage />} />

        <Route path='/my_page' element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
