import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import reducers from './reducers'

import App from './App';

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('root')
);
