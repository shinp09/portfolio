import React from "react";
import posed from "react-pose";
import style from "./Border.module.scss";

const Border: React.FC = () => {
  const isVisible: boolean = true;

  const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const Box = posed.div(props);

  return (
    <div>
      <Box className={style.border} pose={isVisible ? "visible" : "hidden"} />
    </div>
  );
};

export default Border;
