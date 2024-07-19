import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import TaskNoticeAdd from './pages/TaskNotice_Add';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/add' element={<TaskNoticeAdd />} />
      </Routes>
    </Router>
  );
}

export default App;
