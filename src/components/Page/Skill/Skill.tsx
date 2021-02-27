import React from "react";
import Card from "../../Atoms/Card/Card";
import image1 from "../../../assets/Search-Music.jpeg";
// import image2 from "../../../assets/Search-Music.jpeg";
import image3 from "../../../assets/Media.jpeg";
import image5 from "../../../assets/ShoppingGuide.png";
import image6 from "../../../assets/modalu.jpeg";
import style from "./Skill.module.scss";

const Skill: React.FC = () => {
  return (
    <div>
      <h2>Skill</h2>
      <p>フロントエンジニアの学習として</p>
      <div className={style.cards}>
        <Card
          image={image1}
          title={"Search Music"}
          text={"React + SpotifyAPIを使ったWebアプリケーション開発"}
          link={"https://search-music-f43a5.web.app/"}
        />
        <Card
          image={"2"}
          title={"ポートフォリオ"}
          text={"React + TypeScript + Scssを使ったポートフォリオを作成しました"}
          link={"2"}
        />
        <Card
          image={image3}
          title={"LP作成"}
          text={"雑誌掲載一覧ページ"}
          link={"https://www.rakuten.ne.jp/gold/gooddealweb/media/index2.html"}
        />
        <Card
          image={"4"}
          title={"LP作成"}
          text={"前職で作成したギフト特集"}
          link={
            "https://www.rakuten.ne.jp/gold/gooddealweb/toku2/toku17-gift.html"
          }
        />
        <Card
          image={image5}
          title={"お買い物ガイド"}
          text={""}
          link={
            "https://www.rakuten.ne.jp/gold/gooddealweb/company/company.html"
          }
        />
        <Card
          image={image6}
          title={"モーダルウィンドウ"}
          text={""}
          link={"https://www.rakuten.ne.jp/gold/gooddealweb/index-test.html"}
        />
      </div>
    </div>
  );
};

export default Skill;
