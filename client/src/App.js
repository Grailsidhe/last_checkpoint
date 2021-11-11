import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// import Components
import Header from "./components/Header";
import Cover from "./components/Cover";
import Blog from "./components/Blog";
import Admin from "./components/Admin";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Context from './components/Context';
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import AdminLogin from "./components/AdminLogin";

export default function App() {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(1);

  return (
    <div className="App-wrapper">
        <Router>
          <Context.Provider value={{mobile, setMobile, active, setActive}}>
            <Header />
          </Context.Provider>
          <Routes>
            <Route path='/' element={<Cover />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <PrivateRoute path="/admin" element={<Admin />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
};
