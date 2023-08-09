import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/rootReducer';
import App from './App';
import './index.css'

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <GlobalStyles/> */}
      <App />
    </Provider>
  </React.StrictMode>,
);
