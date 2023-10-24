import React, { useState, useEffect, useCallback } from 'react';
import styles from './SequenceMotion.module.scss';

import logo from '/src/assets/sequence-motions/logo.png';

export default function SequenceMotion() {
  const [total, setTotal] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const length = 200;

  const handleImageLoad = () => {
    setTotal((prevTotal) => prevTotal + 1);
  };

  const percent = () => {
    return parseInt((total / length) * 100);
  };

  const handleMouseMove = useCallback((e) => {
    const x = e.pageX;
    const wid = window.innerWidth;
    const imageWid = 1280;
    const leftGap = parseInt((wid - imageWid) / 2);
    const rightGap = imageWid + leftGap;
    let imagePercent = 0;

    if (x >= leftGap && x <= rightGap) {
      imagePercent = parseInt(((x - leftGap) / imageWid) * (length - 1));
      setActiveImage(imagePercent);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className={styles.body}>
      <main className={total === length ? `${styles.on}` : ''}>
        {Array.from({ length }, (_, i) => (
          <img
            src={`/src/assets/sequence-motions/pic${i}.jpg`}
            alt="image"
            key={i}
            style={{ display: i === activeImage ? 'block' : 'none' }}
            onLoad={handleImageLoad}
          />
        ))}
      </main>
      <p className={total === length ? `${styles.on}` : ''}>
        <img src={logo} alt="logo" className={styles.logo}></img>
      </p>

      <aside className={total === length ? `${styles.off}` : ''}>
        {total} / {length} ({percent()}%)
      </aside>
    </div>
  );
}
