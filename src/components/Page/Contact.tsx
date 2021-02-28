import React from "react";
import ContactContents from "../Organisms/ContactContents/ContactContents";
import style from "./Page.module.scss";

const Contact: React.FC = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Contact</h2>
      <p className={style.text}>
        E-mail
        <br />
        shinp09@gmail.com
      </p>
      <ContactContents />
    </div>
  );
};

export default Contact;
