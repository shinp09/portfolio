import React, { useState, useEffect } from "react";
import posed from "react-pose";
import style from "./Border.module.scss";

const Border: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const Box = posed.div(props);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  return (
    <div>
      <Box className={style.border} pose={isVisible ? "hidden" : "visible"} />
    </div>
  );
};

export default Border;
