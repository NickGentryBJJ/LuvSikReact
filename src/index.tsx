import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import configureStore from './store/store'; 
// import { csrfFetch } from './store/csrf'; 
// import * as sessionActions from './store/session'; 
// const store = configureStore();

// if (process.env.NODE_ENV !== 'production') {
//   (window as any).store = store;
//   (window as any).csrfFetch = csrfFetch;
//   (window as any).sessionActions = sessionActions;
// }

// function Root() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

