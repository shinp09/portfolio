import React from "react";
import AboutContents from "../Organisms/AboutContents/AboutContents";
import style from "./Page.module.scss";
import { Scrollbars } from "react-custom-scrollbars";

const About: React.FC = () => {
  return (
    <div className={style.container}>
      <h2>About</h2>
      <Scrollbars className={style.scrollBar} autoHeight autoHeightMax={400}>
        <AboutContents />
      </Scrollbars>
    </div>
  );
};

export default About;
