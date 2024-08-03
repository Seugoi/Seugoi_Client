import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import StudyDetailProvider from './components/study/detail/StudyDetailProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StudyDetailProvider>
    <App />
  </StudyDetailProvider>
);