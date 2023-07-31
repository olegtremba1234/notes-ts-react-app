import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/rootReducer';
import App from './App';
import GlobalStyles from './helpers/GlobaStyles';

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
