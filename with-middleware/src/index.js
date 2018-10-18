import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; //allow us to inject the global store
import { createStore, applyMiddleware } from 'redux'; // allow to create store
import reducer from './store/reducer';

const logAction = store => {
    return next => {
        return action => {
            const result = next(action);
            console.log(`caught in the middleware ${JSON.stringify(result)}`);
            return result;
        }
    }
}//when action is dispatched, it will first run this method

const store = createStore(reducer, applyMiddleware(logAction));//arg to applymiddleware is the one the middle ware we create

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


serviceWorker.unregister();
