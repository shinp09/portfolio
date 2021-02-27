import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import style from "./ContactContents.module.scss";
import wantedly from "../../..//assets/wantedly_mark.png";

const ContactContents: React.FC = () => {
  //   const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };
  return (
    <div>
      <div className={style.icon_contents}>
        <a href="https://github.com/shinp09" target="blank">
          <AiFillGithub className={style.icon} />
        </a>
        <a href="https://qiita.com/afroman09" target="blank">
          <SiQiita className={style.icon} />
        </a>
        <a
          href="https://www.wantedly.com/id/shimpei_mukaiyama_a"
          target="blank"
        >
          <img src={wantedly} alt="logo" className={style.img} />
        </a>
      </div>
    </div>
  );
};

export default ContactContents;
