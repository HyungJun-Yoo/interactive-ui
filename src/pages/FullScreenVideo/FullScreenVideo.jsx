import React, { useEffect } from "react";

import styles from "./FullScreenVideo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faPlaystation,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

import video from "/src/assets/videos/video.mp4";

export default function FullScreenVideo() {
  const year = new Date().getFullYear();

  useEffect(() => {
    document.querySelector("body").className = styles.body;
  });

  return (
    <>
      <header className={styles.header}>
        <h1>DCODELAB</h1>

        <ul id={styles.gnb}>
          <li>
            <Link to="#">COMPANY</Link>
          </li>
          <li>
            <Link to="#">BRAND</Link>
          </li>
          <li>
            <Link to="#">GALLERY</Link>
          </li>
          <li>
            <Link to="#">COMMUNITY</Link>
          </li>
          <li>
            <Link to="#">NEWS</Link>
          </li>
          <li>
            <Link to="#">LOCATION</Link>
          </li>
        </ul>

        <ul className={styles.sns}>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </Link>
          </li>
        </ul>

        <Link to="#" className={styles.btnMenu}>
          <FontAwesomeIcon icon={faBars} />
        </Link>
      </header>

      <figure className={styles.figure}>
        <video src={video} autoPlay muted loop></video>

        <article className={styles.txt}>
          <p>
            UI/UX <br /> DEVELOPMENT
          </p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faPlaystation} />
              <strong>Play This</strong>
            </li>
            <li>
              <FontAwesomeIcon icon={faHeart} />
              <strong>Favorait Item</strong>
            </li>
          </ul>
        </article>
      </figure>

      <footer className={styles.footer}>
        {year} DCODELAB &copy; ALL RIGHTS RESERVED.
      </footer>
    </>
  );
}
