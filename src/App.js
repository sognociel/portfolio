import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Background from "./components/Background";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import ChannelService from "./components/ChannelService";
// import plugInKey from "./PluginKey";

ChannelService.boot({
  pluginKey: plugInKey, //please fill with your plugin key
});

function App() {
  const [isMain, setIsMain] = useState(true);
  const toggleIsMain = () => {
    setIsMain((isMain) => !isMain);
  };

  return (
    <>
      {isMain ? (
        <div className="main-container">
          <Main toggleMain={toggleIsMain} />
        </div>
      ) : (
        <>
          <div className="fixed-border"></div>
          <div className="portfolio-app">
            <Background />
            <Header />
            <Navbar />
            <Section />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
