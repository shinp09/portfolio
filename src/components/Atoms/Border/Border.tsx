import React, { useState, useEffect } from "react";
import posed from "react-pose";
import style from "./Border.module.scss";

const Border: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const Box = posed.div(props);

  useEffect(() => {
    setInterval(() => {
      if (isVisible === true) {
      } else {
        setIsVisible(false);
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Box className={style.border} pose={isVisible ? "visible" : "hidden"} />
    </div>
  );
};

export default Border;
