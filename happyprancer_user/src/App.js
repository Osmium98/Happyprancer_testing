import React, { useState, useEffect } from 'react';
import './App.css';

import Webloader from './PreSignUpPage/Webloader';

import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [data, setdata] = useState("");
  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    async function onLoad() {
      try {
        await Auth.currentSession();
        userHasAuthenticated(true);
      }
      catch (e) {
        if (e !== "No current user") {
          console.log("Error in getting current user")
        }
      }
    }
    onLoad();

  }, []);

  return (
    <div className={isLoading?"App LoaderActive":"App"}>
      {isLoading?<Webloader/>:<></>}
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, data, setdata, isLoading, setIsLoading }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
