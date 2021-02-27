import React from "react";
import style from "./AboutContents.module.scss";

const AboutContents: React.FC = () => {
  return (
    <div className={style.textContents}>
      <h2>About</h2>
      <table>
        <tr>
          <td>Name</td>
          <th>向山晋平</th>
        </tr>
        <tr>
          <td>University</td>
          <th>城西国際大学　メディア学部メディア情報学科　音楽専攻</th>
        </tr>
        <tr>
          <td>Birthday</td>
          <th>1995/4/10</th>
        </tr>
      </table>
      <h2>エンジニアへの転職希望理由</h2>
      <p>
        <h3>UI/UXを向上させ、ユーザー満足度を上げていける開発に携わりたい</h3>
        前職ではネットを通じてお客様に商品を販売し、「ここでしかできない体験を与え、ファンを増やす」を
        <br />
        自店目標に商品ページ・LPページ・モーダルウィンドウの作成などを行いました。
        <br />
        上記の経験から、自分で作成したものに対してユーザーが反応してくれることに感動と楽しさを覚え、
        <br />
        「少しでも誰かの日常を豊かにしてあげたい」と思い、フロントエンドエンジニアを目指すことを決意しました。
        <br />
        ユーザー目線に立って開発できるエンジニアになりたいと考えております。
        <br />
      </p>
    </div>
  );
};

export default AboutContents;
