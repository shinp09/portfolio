import React from "react";
import style from "./Card.module.scss";

interface PROPS {
  image: string;
  title: string;
  text: string;
  link: string;
}

const Card: React.FC<PROPS> = (props) => {
  return (
    <div>
      <div className={style.card}>
        <a href={props.link} target="blank">
          <img src={props.image} alt="画像" />
        </a>
        <div className={style.card__content}>
          <div className={style.card_title}>{props.title}</div>
          <div className={style.card_text}>{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
