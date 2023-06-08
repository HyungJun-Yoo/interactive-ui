import React, { useEffect } from 'react';
import styles from './ResponsiveGallery.module.scss';
import { Link } from 'react-router-dom';
import Isotope from 'isotope-layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import p1 from '/src/assets/responsive-gallerys/p1.jpg';
import p2 from '/src/assets/responsive-gallerys/p2.jpg';
import p3 from '/src/assets/responsive-gallerys/p3.jpg';
import p4 from '/src/assets/responsive-gallerys/p4.jpg';
import p5 from '/src/assets/responsive-gallerys/p5.jpg';
import p6 from '/src/assets/responsive-gallerys/p6.jpg';
import p7 from '/src/assets/responsive-gallerys/p7.jpg';
import p8 from '/src/assets/responsive-gallerys/p8.jpg';
import p9 from '/src/assets/responsive-gallerys/p9.jpg';
import p10 from '/src/assets/responsive-gallerys/p10.jpg';
import p11 from '/src/assets/responsive-gallerys/p11.jpg';
import p12 from '/src/assets/responsive-gallerys/p12.jpg';
import p13 from '/src/assets/responsive-gallerys/p13.jpg';
import p14 from '/src/assets/responsive-gallerys/p14.jpg';
import p15 from '/src/assets/responsive-gallerys/p15.jpg';
import p16 from '/src/assets/responsive-gallerys/p16.jpg';
import p17 from '/src/assets/responsive-gallerys/p17.jpg';
import p18 from '/src/assets/responsive-gallerys/p18.jpg';
import p19 from '/src/assets/responsive-gallerys/p19.jpg';
import p20 from '/src/assets/responsive-gallerys/p20.jpg';

let grid;
let res = () => {
  grid = new Isotope('section', {
    itemSelector: 'article',
    columnWidth: 'article',
    transitionDuration: '0.5s',
  });
};

export default function ResponsiveGallery() {
  const icons = [
    { icon: faTwitterSquare, text: 'Twitter' },
    { icon: faFacebookF, text: 'Facebook' },
    { icon: faEnvelope, text: 'E-mail' },
  ];

  const types = [
    { href: '*', text: 'ALL' },
    { href: '.odd', text: 'ODD' },
    { href: '.even', text: 'EVEN' },
  ];

  const images = [
    {
      src: p1,
      title: 'Lorem, ipsum dolor.',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      src: p2,
      title: 'Soluta, assumenda alias!',
      content: 'Nemo quisquam enim harum dicta exercitationem? Nam, repellat!',
    },
    {
      src: p3,
      title: 'Hic, ea quos.',
      content: 'Dicta, cumque tempore. Aliquid dignissimos commodi sunt quasi?',
    },
    {
      src: p4,
      title: 'Perferendis, ratione explicabo.',
      content:
        'Rerum enim magni voluptatum perferendis, ipsum pariatur repellat?',
    },
    {
      src: p5,
      title: 'Eos, quod necessitatibus?',
      content:
        'Enim tenetur voluptatem deserunt ullam! Quisquam, voluptatibus necessitatibus.',
    },
    {
      src: p6,
      title: 'Necessitatibus, reprehenderit omnis.',
      content:
        'Provident saepe accusantium ad impedit, dolores beatae voluptatem?',
    },
    {
      src: p7,
      title: 'Recusandae, exercitationem alias?',
      content: 'Tempora doloribus ipsam nam in quasi sint aperiam.',
    },
    {
      src: p8,
      title: 'Possimus, quia sapiente!',
      content:
        'Laboriosam illum fuga corporis, iusto porro consequuntur praesentium?',
    },
    {
      src: p9,
      title: 'Cum, ratione perferendis.',
      content: 'Cum nihil mollitia voluptatem odit quidem eveniet aliquid!',
    },
    {
      src: p10,
      title: 'Id, fugit quidem?',
      content: 'Dolor, tempore. Rerum illo eius officiis voluptates excepturi.',
    },
    {
      src: p11,
      title: 'Assumenda, sed quos.',
      content: 'Quis assumenda ratione non magnam maiores! Quasi, tempore.',
    },
    {
      src: p12,
      title: 'Repellat, mollitia ipsam.',
      content: 'Nihil pariatur rem rerum error doloribus facere neque.',
    },
    {
      src: p13,
      title: 'Tempora, reprehenderit. Accusantium.',
      content: 'Aperiam perspiciatis repellendus in debitis laboriosam a eos?',
    },
    {
      src: p14,
      title: 'Ipsum, blanditiis officia.',
      content: 'Illo quas nihil ullam eaque iusto quam deleniti!',
    },
    {
      src: p15,
      title: 'Porro, debitis sint.',
      content: 'Tenetur assumenda voluptates nostrum ducimus, alias sequi ex.',
    },
    {
      src: p16,
      title: 'Minus, enim voluptatum.',
      content:
        'Itaque quasi assumenda animi provident, aliquam necessitatibus porro.',
    },
    {
      src: p17,
      title: 'Debitis, a quae!',
      content: 'Illo corporis odit minima voluptates officia, labore vel?',
    },
    {
      src: p18,
      title: 'At, laboriosam cupiditate?',
      content:
        'Mollitia quaerat, expedita assumenda numquam id ratione voluptatibus.',
    },
    {
      src: p19,
      title: 'Atque, aut illum.',
      content:
        'Commodi doloribus minus voluptatem tempore magnam aliquid natus.',
    },
    {
      src: p20,
      title: 'Deleniti, magni vel?',
      content:
        'Repellendus obcaecati incidunt neque eum, voluptas quidem architecto.',
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();

    const isOn = e.currentTarget.classList.contains(`${styles.on}`);
    if (isOn) return;

    activation(e);
  };

  const activation = (e) => {
    const btns = document.querySelectorAll(`.${styles.main} ul li`);
    for (let btn of btns) btn.classList.remove(`${styles.on}`);
    e.currentTarget.classList.add(`${styles.on}`);

    const btnClass = e.currentTarget.querySelector('a').getAttribute('class');
    grid.arrange({ filter: btnClass });
  };

  useEffect(() => {
    const firstLi = document.querySelector(`.${styles.main} ul li:first-child`);
    if (firstLi) {
      firstLi.classList.add(`${styles.on}`);
    }
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1>DCODE LAB</h1>

        <ul className={styles.ul}>
          {icons.map((icon) => {
            return (
              <li key={icon.text}>
                <Link to="#">
                  <FontAwesomeIcon className={styles.icon} icon={icon.icon} />
                  <span>{icon.text}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </header>

      <main className={styles.main}>
        <ul>
          {types.map((type) => {
            return (
              <li key={type.text} onClick={handleClick}>
                <Link to="#" className={type.href}>
                  {type.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <section onLoad={res}>
          {images.map((image, index) => {
            return (
              <article
                key={image.src}
                className={(index + 1) % 2 == 0 ? 'even' : 'odd'}
              >
                <div className={styles.inner}>
                  <img src={image.src} alt={index} />
                  <h2>{image.title}</h2>
                  <p>{image.content}</p>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
