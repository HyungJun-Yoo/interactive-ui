import React, { useEffect, useState, useRef } from 'react';
import styles from './MusicPlayer.module.scss';
import { Link } from 'react-router-dom';
import {
  faBars,
  faPause,
  faPlay,
  faRedoAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Blizzards from '/src/assets/music-player/Blizzards.jpg';
import Calm from '/src/assets/music-player/Calm.jpg';
import Dusty_Road from '/src/assets/music-player/Dusty_Road.jpg';
import Escape from '/src/assets/music-player/Escape.jpg';
import Payday from '/src/assets/music-player/Payday.jpg';
import Retreat from '/src/assets/music-player/Retreat.jpg';
import Seasonal from '/src/assets/music-player/Seasonal.jpg';
import Vespers from '/src/assets/music-player/Vespers.jpg';

import Blizzards_Music from '/src/assets/music-player/music/Blizzards.mp3';
import Calm_Music from '/src/assets/music-player/music/Calm.mp3';
import Dusty_Road_Music from '/src/assets/music-player/music/Dusty_Road.mp3';
import Escape_Music from '/src/assets/music-player/music/Escape.mp3';
import Payday_Music from '/src/assets/music-player/music/Payday.mp3';
import Retreat_Music from '/src/assets/music-player/music/Retreat.mp3';
import Seasonal_Music from '/src/assets/music-player/music/Seasonal.mp3';
import Vespers_Music from '/src/assets/music-player/music/Vespers.mp3';

export default function MusicPlayer() {
  const [num, setNum] = useState(0);
  const [active, setActive] = useState(0);
  const [rotateState, setRotateState] = useState(null);

  const sectionRef = useRef(null);
  const musicRefs = useRef([]);

  const musics = [
    {
      txt: 'Blizzards',
      img: Blizzards,
      music: Blizzards_Music,
    },
    {
      txt: 'Calm',
      img: Calm,
      music: Calm_Music,
    },
    {
      txt: 'Dusty_Road',
      img: Dusty_Road,
      music: Dusty_Road_Music,
    },
    {
      txt: 'Escape',
      img: Escape,
      music: Escape_Music,
    },
    {
      txt: 'Payday',
      img: Payday,
      music: Payday_Music,
    },
    {
      txt: 'Retreat',
      img: Retreat,
      music: Retreat_Music,
    },
    {
      txt: 'Seasonal',
      img: Seasonal,
      music: Seasonal_Music,
    },
    {
      txt: 'Vespers',
      img: Vespers,
      music: Vespers_Music,
    },
  ];
  const len = musics.length;
  const deg = 360 / len;

  const rotateFrame = (str) => {
    if (str === 'prev') {
      setNum((prev) => prev + 1);
      active === 0 ? setActive(len - 1) : setActive((prev) => prev - 1);
    }

    if (str === 'next') {
      setNum((prev) => prev - 1);
      active === len - 1 ? setActive(0) : setActive((prev) => prev + 1);
    }
  };

  const handleMusic = (index, str) => {
    if (str === 'play') {
      setRotateState(index);
      if (musicRefs.current[index]) musicRefs.current[index].play();
    } else if (str === 'pause') {
      setRotateState(null);
      if (musicRefs.current[index]) musicRefs.current[index].pause();
    } else if (str === 'load') {
      setRotateState(index);
      if (musicRefs.current[index]) {
        musicRefs.current[index].load();
        musicRefs.current[index].play();
      }
    }
  };

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.transform = `rotate(${deg * num}deg)`;
    }
  }, [num]);

  return (
    <figure className={styles.figure}>
      <h1>
        <strong>DCODELAB</strong>
        <br />
        <span>UI/UX DESIGN & DEVELOPMENT</span>
      </h1>

      <Link to="#" className={styles.menu}>
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
      </Link>

      <section ref={sectionRef}>
        {musics.map((music, index) => {
          return (
            <article
              key={music.img}
              className={index === active ? styles.on : ''}
              style={{
                transform: `rotate(${deg * index}deg) translateY(-100vh)`,
              }}
            >
              <div className={styles.inner}>
                <div
                  className={`${styles.pic} ${
                    rotateState === index ? styles.on : ''
                  }`}
                  style={{ backgroundImage: `url(${music.img})` }}
                >
                  <div className={styles.dot}></div>
                </div>
                <div className={styles.txt}>
                  <h2>{music.txt}</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                  <ul>
                    <li
                      className={styles.pause}
                      onClick={() => handleMusic(index, 'pause')}
                    >
                      <FontAwesomeIcon icon={faPause} />
                    </li>
                    <li
                      className={styles.play}
                      onClick={() => handleMusic(index, 'play')}
                    >
                      <FontAwesomeIcon icon={faPlay} />
                    </li>
                    <li className={styles.load}>
                      <FontAwesomeIcon
                        icon={faRedoAlt}
                        onClick={() => handleMusic(index, 'load')}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <audio
                src={music.music}
                loop
                ref={(el) => (musicRefs.current[index] = el)}
              ></audio>
            </article>
          );
        })}
      </section>

      <nav className={styles.btnPrev} onClick={() => rotateFrame('prev')}>
        <span>PREV MUSIC</span>
      </nav>

      <nav className={styles.btnNext} onClick={() => rotateFrame('next')}>
        <span>NEXT MUSIC</span>
      </nav>

      <p>{new Date().getFullYear()} Designed by DCODELAB</p>
    </figure>
  );
}
