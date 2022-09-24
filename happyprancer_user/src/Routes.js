import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./PreSignUpPage/Main"
import Details from "./PreSignUpPage/Details"
import About from "./PreSignUpPage/About"
import Trainer from "./PreSignUpPage/Trainer"
import GetStarted from "./PreSignUpPage/GetStarted"
import Faq from "./PreSignUpPage/Faq"
import Footer from "./PreSignUpPage/Footer"
import Signup from "./PreSignUpPage/Signup"
import SignIn from "./PreSignUpPage/SignIn"
import DashBoard from "./Dashboard/DashBoard"
import GymApplay from "./PreSignUpPage/GymApplay"
import Careers from "./PreSignUpPage/Careers"
import Privacy from "./PreSignUpPage/Privacy"
import Message from "./PreSignUpPage/Message"
import AboutMax from "./PreSignUpPage/AboutMax"
import Nav from "./PreSignUpPage/Nav"
import NoPage from "./NoPage"
import Webloader from "./PreSignUpPage/Webloader"

import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";

export default function Links() {
    const Home = () => {
        return (
            <>
                <Nav />
                <Main />
                <Details />
                <About />
                <Trainer />
                <GetStarted />
                <Faq />
                <Footer />
            </>
        )
    }
    return (

        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NoPage />} />
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/webloader" element={<Webloader />} />
                <Route path="/signup" element={<UnauthenticatedRoute><Signup /></UnauthenticatedRoute>} />
                <Route path="/login" element={<UnauthenticatedRoute><SignIn /></UnauthenticatedRoute>} />
                <Route path="/signin" element={<UnauthenticatedRoute><SignIn /></UnauthenticatedRoute>} />
                <Route path="/dashboard" element={<AuthenticatedRoute><DashBoard /></AuthenticatedRoute>} />
                <Route path="/gymapplay" element={<AuthenticatedRoute><GymApplay /></AuthenticatedRoute>} />
                <Route path="/careers" element={<AuthenticatedRoute><Careers /></AuthenticatedRoute>} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/message" element={<AuthenticatedRoute><Message /></AuthenticatedRoute>} />
                <Route path="/about" element={<AboutMax />} />
            </Routes>
        </BrowserRouter>
    );
}