import React, { useEffect } from 'react';

import styles from './TownAnimation.module.css';

import circle from '/src/assets/towns/circle.png';
import cloud1 from '/src/assets/towns/cloud1.png';
import cloud2 from '/src/assets/towns/cloud2.png';
import family from '/src/assets/towns/family.png';
import man from '/src/assets/towns/man.png';
import sun from '/src/assets/towns/sun.png';
import townDay from '/src/assets/towns/town_day.png';
import townNight from '/src/assets/towns/town_night.png';

export default function TownAnimation() {
  useEffect(() => {
    document.querySelector('body').className = styles.body;
  });

  return (
    <>
      <section className={styles.section}>
        <article className={styles.sky}>
          <img src={sun} alt="sun" className={styles.sun} />
          <img src={cloud1} alt="cloud1" className={styles.cloud1} />
          <img src={cloud2} alt="cloud2" className={styles.cloud2} />
        </article>

        <article className={styles.town}>
          <img src={circle} alt="circle" className={styles.circle} />
          <img src={townNight} alt="townNight" className={styles.townNight} />
          <img src={townDay} alt="townDay" className={styles.townDay} />
        </article>

        <article className={styles.people}>
          <img src={man} alt="man" className={styles.man} />
          <img src={family} alt="family" className={styles.family} />
        </article>
      </section>
    </>
  );
}
