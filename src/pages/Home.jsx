import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Link to={'/ProfileCard'}>
        <p>ProfileCard</p>
      </Link>

      <Link to={'/FullScreenVideo'}>
        <p>FullScreenVideo</p>
      </Link>

      <Link to={'/TownAnimation'}>
        <p>TownAnimation</p>
      </Link>

      <Link to={'/PanoramaUI'}>
        <p>PanoramaUI</p>
      </Link>

      <Link to={'/FlexVideoBox'}>
        <p>FlexVideoBox</p>
      </Link>

      <Link to={'/SwiperGallery'}>
        <p>SwiperGallery</p>
      </Link>
    </div>
  );
}
