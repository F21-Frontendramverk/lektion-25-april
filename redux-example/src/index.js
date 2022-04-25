import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import { Provider } from 'react-redux';

/**
 * Store - sparar ditt state
 * Reducer - Uppdaterar ditt state (hur ska det uppdateras)
 * Actions - Säger vad vi ska uppdatera och vad vi vill lägga in i vår store
 * Dispatcher - Triggar en action
 */

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
