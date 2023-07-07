import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// == Redux ==
import { store } from 'redux/store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
