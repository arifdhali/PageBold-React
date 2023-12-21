import React from "react";
import "./App.css";
import { Footer, Header, Communication, Members } from "./Container";
import { Navbar } from "./Components";
const App = () => {
  return (
    <>
      <div className="App banner">
        <div className="banner-top">
          <Navbar />
          <Header />
        </div>
        <Communication />
        <Members />
        <Footer />
      </div>
    </>
  );
};

export default App;
