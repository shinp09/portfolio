import React from "react";
import ContactContents from "../Organisms/ContactContents/ContactContents";
import style from "./Page.module.scss";
import posed from "react-pose";

const Contact: React.FC = () => {
  const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const Box = posed.div(props);

  return (
    <>
      <Box className={style.border} />
      <div className={style.container}>
        <h2 className={style.title}>Contact</h2>
        <ContactContents />
      </div>
    </>
  );
};

export default Contact;
