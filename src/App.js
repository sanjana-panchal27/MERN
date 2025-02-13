import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
// import Login from "./components/Login/Login";

function App() {
  // state to control login popup
  // const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/*Link with Navbar.js to show/import content */}
      {/* nav-landing for landing page, cause there are multiple navbar in dashboards */}
      <div className="nav-landing">
        <Navbar />

        {/* <Login /> */}

        <footer />
      </div>
    </>
  );
}

export default App;
