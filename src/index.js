import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from 'pages';
import {Provider} from 'react-redux';
import store from 'redux/store'
import "asset/styles/general.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Home/>
        </Provider>
    </React.StrictMode>
);
