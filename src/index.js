import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';

import store from './redux/store';
import StudyDetailProvider from './components/study/detail/StudyDetailProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <StudyDetailProvider>
      <App />
    </StudyDetailProvider>
  </Provider>
);