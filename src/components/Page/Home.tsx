import React from "react";
import style from "./Page.module.scss";

const Home: React.FC = () => {
  return (
    <div className={style.container}>
      <h2 className={style.name}>Shinpei Mukaiyama</h2>
    </div>
  );
};

export default Home;
