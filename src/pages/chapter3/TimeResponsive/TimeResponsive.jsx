import React, { useState, useEffect } from 'react';
import styles from './TimeResponsive.module.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import cloud1 from '/src/assets/time-responsives/cloud1.png';
import cloud2 from '/src/assets/time-responsives/cloud2.png';

export default function TimeResponsive() {
  const getTime = () => {
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // 오전 오후 구분
    let mer = hr >= 12 ? 'pm' : 'am';
    if (hr >= 13) hr -= 12;

    // 시간이 한 자릿수이면 앞에 0 추가
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    return [hr, min, sec, mer];
  };

  const initialTimes = () => {
    let [hr, min, sec, mer] = getTime();
    return { hr, min, sec, mer };
  };

  const [time, setTime] = useState(() => initialTimes());
  const [main, setMain] = useState();
  const [navs, setNavs] = useState([
    { text: 'morning', bool: false },
    { text: 'afternoon', bool: false },
    { text: 'evening', bool: false },
    { text: 'night', bool: false },
  ]);

  const menus = ['About', 'Company', 'History', 'Community', 'Contact us'];
  const snsList = [
    { icon: faFacebook, text: 'FaceBook' },
    { icon: faTwitter, text: 'Twitter' },
    { icon: faEnvelope, text: 'Envelope' },
  ];

  useEffect(() => {
    setInterval(() => {
      const [hr, min, sec, mer] = getTime();
      setTime({ hr, min, sec, mer });
    }, 1000);
  }, []);

  useEffect(() => {
    let now = new Date().getHours();
    if (now >= 5 && now < 11) setMain(`${styles.morning}`);
    if (now >= 11 && now < 16) setMain(`${styles.afternoon}`);
    if (now >= 16 && now < 19) setMain(`${styles.evening}`);
    if (now >= 19 || now < 5) setMain(`${styles.night}`);
  }, [time.hr]);

  useEffect(() => {
    if (!main) return;

    setNavs((navs) => {
      return navs.map((nav) => {
        if (main == `${styles.morning}` && nav.text == 'morning')
          return { ...nav, bool: true };
        if (main == `${styles.afternoon}` && nav.text == 'afternoon')
          return { ...nav, bool: true };
        if (main == `${styles.evening}` && nav.text == 'evening')
          return { ...nav, bool: true };
        if (main == `${styles.night}` && nav.text == 'night')
          return { ...nav, bool: true };

        return { ...nav, bool: false };
      });
    });

    const mainTag = document.querySelector(`.${main}`);
    if (main == `${styles.afternoon}`) {
      mainTag.classList.add(`${styles['dark_text']}`);
    } else {
      mainTag.classList.remove(`${styles['dark_text']}`);
    }
  }, [main]);

  return (
    <main className={`${styles.main} ${main}`}>
      <img src={cloud1} alt={cloud1} className={`${styles['sky_cl1']}`} />
      <img src={cloud2} alt={cloud2} className={`${styles['sky_cl2']}`} />

      <header>
        <h1>DCODELAB</h1>

        <ul id={styles.gnb}>
          {menus.map((menu) => {
            return (
              <li key={menu}>
                <Link to="#">{menu}</Link>
              </li>
            );
          })}
        </ul>

        <ul id={styles.sns}>
          {snsList.map((list) => {
            return (
              <li key={list.text}>
                <Link to="#">
                  <FontAwesomeIcon className={styles.icon} icon={list.icon} />
                </Link>
              </li>
            );
          })}
        </ul>
      </header>

      <article>
        <p>
          <strong>Lorem</strong> Ipsum
        </p>
        <em>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
          expedita.
        </em>
      </article>

      <figure>
        <div className={styles.screen}>
          <em>{time.mer}</em>
          <span>{time.hr}</span> : <span>{time.min}</span> :{' '}
          <span>{time.sec}</span>
          <img src={cloud1} alt={cloud1} className={styles.cl1} />
          <img src={cloud2} alt={cloud2} className={styles.cl2} />
        </div>
      </figure>

      <nav>
        {navs.map((nav) => {
          return (
            <span
              to="#"
              key={nav.text}
              className={nav.bool ? `${styles.on}` : ''}
            >
              {nav.text}
            </span>
          );
        })}
      </nav>
    </main>
  );
}
