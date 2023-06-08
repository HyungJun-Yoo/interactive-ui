import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';

import profileCard from '/src/assets/homes/profileCard.webp';
import fullScreenVideo from '/src/assets/homes/fullScreenVideo.webp';
import townAnimation from '/src/assets/homes/townAnimation.webp';
import panoramaUI from '/src/assets/homes/panoramaUI.webp';
import flexVideoBox from '/src/assets/homes/flexVideoBox.webp';
import swiperGallery from '/src/assets/homes/swiperGallery.webp';
import responsiveGallery from '/src/assets/homes/responsiveGallery.webp';
import timeResponsive from '/src/assets/homes/timeResponsive.webp';

export default function Home() {
  const chapter1 = [
    {
      title: 'ProfileCard',
      src: profileCard,
      env: ['PC'],
    },
    {
      title: 'FullScreenVideo',
      src: fullScreenVideo,
      env: ['PC'],
    },
    {
      title: 'TownAnimation',
      src: townAnimation,
      env: ['PC'],
    },
  ];

  const chapter2 = [
    {
      title: 'PanoramaUI',
      src: panoramaUI,
      env: ['PC'],
    },
    {
      title: 'FlexVideoBox',
      src: flexVideoBox,
      env: ['PC'],
    },
    {
      title: 'SwiperGallery',
      src: swiperGallery,
      env: ['PC'],
    },
  ];

  const chapter3 = [
    {
      title: 'ResponsiveGallery',
      src: responsiveGallery,
      env: ['PC', 'Mobile'],
    },
    {
      title: 'TimeResponsive',
      src: timeResponsive,
      env: ['PC'],
    },
  ];

  return (
    <main>
      <header className={styles.header}>
        <h1>Interactive UI</h1>
        <div className={styles.desc}>
          <p>
            웹 모션 디자인 학습 내용을 React 스타일로 구현하고 정리한 사이트
            입니다.
          </p>
          <p>이미지를 클릭하면 구현한 페이지로 이동합니다.</p>
          <p>뒤로 가기를 누르면 현재 위치로 돌아옵니다.</p>
        </div>
      </header>
      <section className={`${styles.section} ${styles.chapter1}`}>
        <h2 className={styles.h2}>Chapter1</h2>
        <div className={styles.inner}>
          {chapter1.map((content) => {
            return (
              <article className={styles.article} key={content.title}>
                <Link to={`/${content.title}`}>
                  <img src={content.src} alt={content.title} />
                  <p>{content.title}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`${styles.section} ${styles.chapter2}`}>
        <h2 className={styles.h2}>Chapter2</h2>
        <div className={styles.inner}>
          {chapter2.map((content) => {
            return (
              <article className={styles.article} key={content.title}>
                <Link to={`/${content.title}`}>
                  <img src={content.src} alt={content.title} />
                  <p>{content.title}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`${styles.section} ${styles.chapter3}`}>
        <h2 className={styles.h2}>Chapter3</h2>
        <div className={styles.inner}>
          {chapter3.map((content) => {
            return (
              <article className={styles.article} key={content.title}>
                <Link to={`/${content.title}`}>
                  <img src={content.src} alt={content.title} />
                  <p>{content.title}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
