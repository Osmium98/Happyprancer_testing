import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./Responsive.css"

import App from './App';
import Blobs from './PreSignUpPage/Blobs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Blobs />
        <div className="Blob_Overlay"></div>
        <App />
    </>
);