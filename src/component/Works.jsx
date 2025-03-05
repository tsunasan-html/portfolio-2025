import React, { useState, useEffect } from 'react';
import '../assets/css/Works.css';

import works01 from '../assets/cat.jpg';
import works02 from '../assets/cat.jpg';

function Works() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const titleElement = document.querySelector('.content__title');
    const imageElements = document.querySelectorAll('.works_listItem_eyecatch');

    if (titleElement) titleObserver.observe(titleElement);
    imageElements.forEach((el) => {
      imageObserver.observe(el);
    });

    return () => {
      if (titleElement) titleObserver.unobserve(titleElement);
      imageElements.forEach((el) => {
        imageObserver.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <div className="l-content content">
        <div className="l-content_inner content_inner">
          <section className="content__works">
            <h1 className={`content__title ${isTitleVisible ? 'visible' : ''}`}>WORKS</h1>
            <ul className="works_list">
              <li className="works_listItem">
                <a href="/" className="">
                  <img 
                    src={works01} 
                    className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                    alt="Miraie" 
                  />
                  <div className="works_listItem_textblock">
                    <h2 className="works_title">Pricing tools</h2>
                  </div>
                </a>
              </li>
              <li className="works_listItem">
                <a href="/" className="">
                  <img 
                    src={works02} 
                    className={`works_listItem_eyecatch ${isImageVisible ? 'visible' : ''} fadein scrollin`} 
                    alt="ACA Football Partners" 
                  />
                  <div className="works_listItem_textblock">
                    <h2 className="works_title">Questionnaire form</h2>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default Works;
