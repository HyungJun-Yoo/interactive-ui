import React, { useEffect } from 'react';
import styles from './SwiperGallery.module.scss';
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

import pic1 from '/src/assets/swiper-gallerys/pic1.png';
import pic2 from '/src/assets/swiper-gallerys/pic2.png';
import pic3 from '/src/assets/swiper-gallerys/pic3.png';
import pic4 from '/src/assets/swiper-gallerys/pic4.png';
import pic5 from '/src/assets/swiper-gallerys/pic5.png';

export default function SwiperGallery() {
  const pics = [pic1, pic2, pic3, pic4, pic5];

  const loremH2 = [
    'Lorem ipsum dolor sit.',
    'Corrupti itaque dignissimos amet.',
    'Soluta expedita molestias odio.',
    'Recusandae placeat fuga sint!',
    'At aut incidunt quasi!',
  ];
  const loremP = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, ipsa?',
    'Voluptate, assumenda? Ducimus voluptatum repellat labore doloremque! Error, nihil maiores?',
    'Repudiandae, repellat vel velit eius atque reiciendis provident quaerat mollitia.',
    'Dolores ullam porro eos error culpa quae sint sit ipsam.',
    'Assumenda cumque excepturi quisquam numquam id quo reprehenderit libero nulla?',
  ];

  const handleSlideChange = () => {
    // swiper-slide-active 찾는 코드
    const prevSlide = document.querySelector('.swiper-slide-prev');
    const currentSlide = document.querySelector('.swiper-slide-active');
    const nextSlide = document.querySelector('.swiper-slide-next');

    if (prevSlide) {
      prevSlide.classList.add(`${styles['swiper-slide-prev']}`);
      prevSlide.classList.remove(
        `${styles['swiper-slide-active']}`,
        `${styles['swiper-slide-next']}`,
      );
    }

    if (currentSlide) {
      currentSlide.classList.add(`${styles['swiper-slide-active']}`);
      currentSlide.classList.remove(
        `${styles['swiper-slide-prev']}`,
        `${styles['swiper-slide-next']}`,
      );
    }

    if (nextSlide) {
      nextSlide.classList.add(`${styles['swiper-slide-next']}`);
      nextSlide.classList.remove(
        `${styles['swiper-slide-prev']}`,
        `${styles['swiper-slide-active']}`,
      );
    }

    // 이전 슬라이드, 현재 슬라이드, 다음 슬라이드가 아니면 모든 슬라이드에서 클래스 이름을 제거합니다.
    const allSlides = document.querySelectorAll('.swiper-slide');
    allSlides.forEach((slide) => {
      if (
        slide !== prevSlide &&
        slide !== currentSlide &&
        slide !== nextSlide
      ) {
        slide.classList.remove(
          `${styles['swiper-slide-prev']}`,
          `${styles['swiper-slide-active']}`,
          `${styles['swiper-slide-next']}`,
        );
      }
    });
  };

  useEffect(() => {
    const swiper = new Swiper(`main`, {
      speed: 500, // 스와이프시 패널이 넘어가는 속도
      loop: true, // 스와이프를 순환
      direction: 'horizontal', // horizontal 가로, vertical 세로 스와이프
      grabCursor: true,
      slidesPerView: 'auto', // 숫자(해당 갯수 단위로 패널이 보임), "auto": 100%, 특정 크기를 지정
      spaceBetween: 30, // 패널 사이 간격 (px)
      centeredSlides: true, // 활성화 패널을 항상 가로 가운대 배치
      pagination: {
        el: `.swiper-pagination`, // 페이지네이션 버튼 추가
        // clickable: true, // 클릭가능여부 설정
        type: 'fraction',
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50, // y축 회전각도
        stretch: -100, // 당겨짐 정도
        depth: 400, // 입체적인 왜곡효과 정도
        slideShadows: false, // 패널의 그림자 설정
      },
    });

    handleSlideChange();
    swiper.on('slideChangeTransitionStart', handleSlideChange);

    // 페이지네이션 classname 등록
    const paginationEl = document.querySelector('.swiper-pagination-fraction');
    const paginationElCurrent = document.querySelector(
      '.swiper-pagination-current',
    );
    paginationEl.classList.add(`${styles['swiper-pagination-fraction']}`);
    paginationElCurrent.classList.add(`${styles['swiper-pagination-current']}`);

    // 네이게이션 classname 등록
    const buttonPrevEl = document.querySelector('.swiper-button-prev');
    const buttonNextEl = document.querySelector('.swiper-button-next');
    buttonPrevEl.classList.add(
      `${styles['swiper-button-prev']}`,
      `${styles.navi}`,
    );
    buttonNextEl.classList.add(
      `${styles['swiper-button-next']}`,
      `${styles.navi}`,
    );

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <h1 className={styles.h1}>DCODELAB</h1>
      <main className={styles.main}>
        <section className={`${styles.swiperWrapper} swiper-wrapper`}>
          {pics.map((pic, index) => {
            return (
              <article
                className={`${styles.swiperSlide} swiper-slide`}
                key={pic}
              >
                <div className={styles.inner}>
                  <div className={styles.con}>
                    <img src={pic} alt={`pic${index + 1}`} />
                    <h2>{loremH2[index]}</h2>
                    <p>{loremP[index]}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <nav className={`swiper-pagination`}></nav>

        <nav className={`swiper-button-prev`}></nav>
        <nav className={`swiper-button-next`}></nav>
      </main>
      <footer className={styles.footer}>
        {new Date().getFullYear()} DCODELAB &copy; All RIGHTS RESERVED.
      </footer>
    </>
  );
}
