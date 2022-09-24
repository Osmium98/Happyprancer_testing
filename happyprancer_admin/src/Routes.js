import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./PreSignUpPage/SignIn"
import Nav from "./PreSignUpPage/Nav"
import NoPage from "./NoPage"
import Webloader from "./PreSignUpPage/Webloader"
import DashBoard from "./Dashboard/DashBoard"

import AuthenticatedRoute from "./AuthenticatedRoute"
import UnauthenticatedRoute from "./UnauthenticatedRoute"


export default function Links() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NoPage />} />
                <Route index element={<SignIn />} />
                <Route path="/" element={<SignIn />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/dashboard" element={<AuthenticatedRoute><DashBoard /></AuthenticatedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}