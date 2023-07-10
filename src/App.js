import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';

import Nav from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./page/home/Home";
import Chat from "./page/chat/Chat";
import Write from "./page/write/Write";
import Notice from "./page/notice/Notice";
import NewNotice from "./page/notice/NewNotice";
import NoticeContent from "./page/notice/noticeContent";
import FAQ from "./page/faq/FAQ";
import MyDocs from "./page/mydocs/MyDocs";
import ViewDocPDF from "./page/mydocs/ViewDocPDF";
import Login from "./page/login/Login";
import Logout from "./page/logout/Logout";
import Register from "./page/register/Register";
import UpdateDocs from "./page/mydocs/UpdateDocs";

import PersonalTerm from "./page/term/personal";
import UseTerm from "./page/term/use";


function App() {
    // const url='http://localhost:8000/';
    // fetch(url).then((res) => res.json())
    //   .then(data => console.log(data))

    // 로그인 상태 확인
    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");
    const isLoggedIn = refreshToken && accessToken;

    const userEmail = localStorage.getItem("userEmail");

    return (
        <div className="App">
            <Nav isLoggedIn={isLoggedIn} userEmail={userEmail} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/write" element={<Write />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/newNotice" element={<NewNotice />} />
                <Route path="/noticeContent/:idx" element={<NoticeContent />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/mydocs" element={<MyDocs />} />
                <Route path="/viewpdf/:idx/:id" element={<ViewDocPDF />} />
                <Route path="/update_docs/:idx" element={<UpdateDocs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path='/personal' element={<PersonalTerm />} />
                <Route path='/use' element={<UseTerm />} />
            </Routes>
            <Footer />

            <Helmet>
                <title>LawABLE</title>
            </Helmet>
        </div>
    );
}

export default App;
