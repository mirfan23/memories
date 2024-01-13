import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers'

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = document.getElementById('root');

const createRoot = ReactDOM.createRoot(root);
createRoot.render(<App />);
