import React from "react";
import "./HelpBox.css";

interface HelpBoxProps {
  title: string;
  text: string;
}

const HelpBox: React.FC<HelpBoxProps> = ({ title, text }) => {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

export default HelpBox;
