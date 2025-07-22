import React from "react";
import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

const App: React.FC = () => {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
};

export default App;
