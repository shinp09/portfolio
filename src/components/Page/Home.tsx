import React from "react";
import style from "./Page.module.scss";

const Home: React.FC = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.name}>
          Shinpei Mukaiyama
          <br />- Portfolio -
        </div>
      </div>
    </div>
  );
};

export default Home;
