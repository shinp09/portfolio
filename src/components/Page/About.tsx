import React from "react";
import AboutContents from "../Organisms/AboutContents/AboutContents";
import style from "./Page.module.scss";

const About: React.FC = () => {
  return (
    <div className={style.container}>
      <h2>About</h2>
        <AboutContents />
    </div>
  );
};

export default About;
