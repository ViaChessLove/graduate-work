import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-app-polyfill/stable';

import App from './App';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
