import React from 'react';
import ReactDOM from 'react-dom/client';
import "asset/styles/general.scss"
import {Home} from "pages";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Home/>
    </React.StrictMode>
);
