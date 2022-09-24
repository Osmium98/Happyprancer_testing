import React, { useState, useEffect } from 'react';
import './App.css';

import Webloader from './PreSignUpPage/Webloader';
import Routes from './Routes'
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function onLoad() {
      // setIsLoading(true)
      try {
        await Auth.currentSession();
        userHasAuthenticated(true);
      }
      catch (e) {
        if (e !== "No current user") {
          console.log("Error in getting current user")
        }
      }
      // setIsLoading(false);
    }
    onLoad();

  },[]);

  return (
    <div className={isLoading ? "App LoaderActive" : "App"}>
      {isLoading ? <Webloader /> : <></>}
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, isLoading, setIsLoading }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
