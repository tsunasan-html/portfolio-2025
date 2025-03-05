import React, { useEffect, useState } from 'react';
import '../assets/css/About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <div className="l-content content">
        <div className="l-content_inner content_inner">
          <section className="content__about">
            <h1 className={`about__title animate-on-scroll ${isVisible ? 'visible' : ''}`}>ABOUT</h1>
            <h2 className={`about__name animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              TETSUHIRO MUNEYUKI
              <span className={`about__name-position animate-on-scroll ${isVisible ? 'visible' : ''}`}>WEB DESIGNER</span>
            </h2>
            <p className={`about__sentence animate-on-scroll ${isVisible ? 'visible' : ''}`}>
              1990年、愛媛県今治市生まれ。<br />
              <br />
              2021年7月にゴリラクリニックに入社し、お問い合わせフォームのコーディングを担当。<br />
              主にPHPとVue（Options API）を使用し、保守運用を行いました。<br />
              加えて、GASやJavaScriptを活用したフロントエンド開発にも携わり、
              <br />Next.jsやTypeScriptを用いたWebサイト運用や、
              <br />VPSを利用したWordPressの移行作業も経験しました。<br /><br />
              現在はReactを独学中。このページもReactで作られています。
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
