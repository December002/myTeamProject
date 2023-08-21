import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import App from './App';
import Test from './plan/TestGrid';

export default function RouteApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/plan" element={<Test/>}/>
      </Routes>
    </Router>
  );
}