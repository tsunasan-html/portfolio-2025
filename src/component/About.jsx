import React from 'react';
import '../assets/css/About.css';

function About() {
  return (
    <div className="about">
      <div className="about__inner">
        <section className="about__profile">
          <h1 className="about__title">ABOUT</h1>
          <h2 className="about__name">
            TETSUHIRO MUNEYUKI
            <span className="about__name-position">WEB DESIGNER</span>
          </h2>
          <p className="about__sentence">
            1990年、愛媛県今治市生まれ。<br />
            <br />
              2021年7月にゴリラクリニックに入社し、お問い合わせフォームのコーディングを担当。<br />
              主にPHPとVue（Options API）を使用し、保守運用を行いました。<br />
              加えて、GASやJavaScriptを活用したフロントエンド開発にも携わり、
              <br />Next.jsやTypeScriptを用いたWebサイト運用や、
              <br />VPSを利用したWordPressの移行作業も経験しました。<br /><br />
              現在はReactを独学中。
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
