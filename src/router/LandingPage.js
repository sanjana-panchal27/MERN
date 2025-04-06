import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Assets/Home";
import AboutUs from "../Assets/AboutUs";
import Service from "../Assets/Service";
import Contact from "../Assets/Contact";
import FAQs from "../Assets/FAQs";
import Login from "../components/Login/Login";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error from "../Error";

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
          <Route exact path="/*" element={<Error />}></Route>
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
