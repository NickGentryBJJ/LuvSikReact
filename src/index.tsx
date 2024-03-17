import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store/store'; 
import { csrfFetch } from './store/csrf'; 
import * as sessionActions from './store/session'; // Assuming the correct path is 'store/session'
declare const process: any;
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  (window as any).store = store;
  (window as any).csrfFetch = csrfFetch;
  (window as any).sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
renderApplication();