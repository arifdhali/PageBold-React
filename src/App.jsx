import React from "react";
import "./App.css";
import {
  Footer,
  Header,
  Communication,
  Members,
  Ready_made,
} from "./Container";
import { Navbar, Brand } from "./Components";
const App = () => {
  return (
    <>
      <div className="App banner">
        <div className="banner-top">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <Ready_made />
        <Communication />
        <Members />
        <Footer />
      </div>
    </>
  );
};

export default App;
