import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; //allow us to inject the global store
import { createStore } from 'redux'; // allow to create store
import reducer from './store/reducer';


const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


serviceWorker.unregister();
