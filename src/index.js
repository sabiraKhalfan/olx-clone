import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context,{FirebaseContext} from './Store/Context';
import { firebase, auth, storage } from './Firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{ firebase, auth, storage}}>
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>
)