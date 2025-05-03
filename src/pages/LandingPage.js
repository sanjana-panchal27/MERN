import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ForgotPassword from '../pages/Auth/ForgotPassword';
import ResetPassword from '../pages/Auth/ResetPassword';

import Home from '../pages/Navbar/Home';
import AboutUs from '../pages/Navbar/AboutUs';
import Service from '../pages/Navbar/Service';
import Contact from '../pages/Navbar/Contact';
import FAQs from '../pages/Navbar/FAQs';
import Login from '../pages/Login/Login';
import Footer from '../pages/Navbar/Footer';
import Header from '../pages/Navbar/Header';
import Error from '../Error';

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route
            exact
            path="/reset-password/:token"
            element={<ResetPassword />}
          />
          <Route exact path="/*" element={<Error />}></Route>
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
