import React, { useState } from "react";
import HelpArea from "./HelpArea";

const MainContent: React.FC = () => {
  const [helpVisible, setHelpVisible] = useState<boolean>(false);

  const toggleHelp = (): void => {
    setHelpVisible((isVisible) => !isVisible);
  };

  return (
    <main>
      <button onClick={toggleHelp}>{helpVisible ? "Hide" : "Show"} Help</button>
      {helpVisible && <HelpArea />}
    </main>
  );
};

export default MainContent;
