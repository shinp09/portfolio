import React from "react";
import style from "./AboutContents.module.scss";

const AboutContents: React.FC = () => {
  return (
    <div className={style.textContents}>
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
      <h2>📌エンジニアへの転職希望理由</h2>
      <p>
        <h3>✔ITサービスを提供して、多くの人の課題解決に貢献していきたい</h3>
        <h3>
          ✔フロントエンドというユーザーの反応がダイレクトにわかるポジションでUI/UXの向上に努め、ユーザー満足度をあげたい
        </h3>
        前職でユーザーやチームの課題を解決するためにLP・モーダルウィンドウの作成をし、
        ユーザー満足度の向上・チームの作業負担を減少・売り上げを増加させました。
        <br />
        自分が作成したものでユーザーやチームメンバーの課題を解決できた事に喜びを感じ、
        多くの人の課題を解決出来るエンジニアやITサービスに興味を持ちました。
        <br />
        また、様々な技術を習得して自身の成長を感じる事にも嬉しさを感じ、エンジニアになる事を決意しました。
        <br />
        エンジニアになり、誰かの課題を解決して喜んでもらえる様なITサービスを提供したいと考えております。
        <br />
        自分が思うサービスを作れるスキルを身に着ける為、技術力の向上に全力で取り組んでいきたいと考えております。
        <br />
      </p>
      <h2>📌目指す将来像</h2>
      <p>
        -1年後
        <br />
        「フロントエンドの総合的な知識を身につけ、ユーザー満足度をあげられるエンジニア」を目指します。
        <br />
        携わっているサービスのユーザーに対しての効果的なアクションを考え、実行していきます。
        <br />
        個人学習ではフロントエンドに関わる知識を身につけ、サービスに落とし込んでいきます。
        <br />
        <br />
        -2年後
        <br />
        「フロントエンドエンジニアとしての信頼を得て、ビジネス観点から会社に貢献できるエンジニア」を目指します。
        <br />
        エンジニアとして技術的向上は必須ですが、その技術を生かし会社に利益として還元できるエンジニアになりたいと考えております。
        <br />
        個人学習ではバックエンドの学習を行い、全て一人で開発できるようにします。
      </p>
      <h2>📌アピールポイント</h2>
      <p>
        <h3>✔知的好奇心／自走力</h3>
        新しい技術やアイデアには非常に興味があり、「他にやり方はないか」を常に意識し既存のやり方に囚われないようにしております。
        <br />
        前職では「今この商品をお客様に提案するにはどういう見せ方をしたらいいか」を市場状況などから判断するために、
        <br />
        毎日の通勤時間などに他店の見せ方などをリサーチして、LPページなどを作成して自店に落とし込んでいました。
        <br />
        この強みを生かし、技術の移り変わりの早いフロントエンジニアでも常にアンテナを高く張り、最新の技術をキャッチアップしサービスに落とし込んでいきます。
        <br />
      </p>
      <p>
        <h3>✔継続力</h3>
        プログラミング学習を始めてから180日以上、毎日欠かさず学習を継続しています。
        <br />
        仕事をしていた際には、平日2時間以上、休日10時間以上の学習を行い、仕事を辞めた現在では毎日10時間以上の学習を続けてきました。
        <br />
        仕事がどれだけ忙しくても、毎日絶対2時間は勉強すると決め、欠かす事はありませんでした。
        <br />
        エンジニアになってからも、最新技術にキャッチアップするために継続して学習を行い、早く戦力になりたいと思います
        <br />
      </p>
    </div>
  );
};

export default AboutContents;
