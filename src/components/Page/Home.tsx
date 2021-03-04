import React from "react";
import posed from "react-pose";
import style from "./Page.module.scss";

const Home: React.FC = () => {
  const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const Box = posed.div(props);

  return (
    <>
      <Box className={style.border} />
      <div className={style.container}>
        <div className={style.name}>
          Shinpei Mukaiyama
          <br />- Portfolio -
        </div>
      </div>
    </>
  );
};

export default Home;
