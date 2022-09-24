import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./Responsive.css"

import App from './App'; 
import { Amplify } from 'aws-amplify';
import config from './config';

import Blobs from './PreSignUpPage/Blobs';
import Whatsapp from "./PreSignUpPage/Whatsapp"

Amplify.configure({
  Auth: {
    mandatorySignIn: false,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: "HappyPrancer",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Blobs />
    <Whatsapp />
    <div className="Blob_Overlay"></div>
    <App />
  </>
);