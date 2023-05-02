import React, { useState, useEffect } from "react";
import styles from "./FlexVideoBox.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirstdraft } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";

import vid1 from "/src/assets/videoboxs/vid1.mp4";
import vid2 from "/src/assets/videoboxs/vid2.mp4";
import vid3 from "/src/assets/videoboxs/vid3.mp4";
import vid4 from "/src/assets/videoboxs/vid4.mp4";

export default function FlexVideoBox() {
  const [aside, setAside] = useState({
    tit: "",
    con: "",
    vidSrc: "",
  });
  const [hide, setHide] = useState(false);

  useEffect(() => {
    document.querySelector("body").className = styles.body;
  }, []);

  const vids = [vid1, vid2, vid3, vid4];

  const MouseEnter = (event) => {
    event.currentTarget.querySelector("video").play();
  };

  const MouseLeave = (event) => {
    event.currentTarget.querySelector("video").pause();
  };

  const MouseClick = (event) => {
    const tit = event.currentTarget.querySelector("h2").innerText;
    const con = event.currentTarget.querySelector("p").innerText;
    const vidSrc = event.currentTarget
      .querySelector("video")
      .getAttribute("src");

    setAside({
      tit,
      con,
      vidSrc,
    });

    setHide(true);
  };

  const btnClose = () => {
    setHide(false);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.h1}>
          <FontAwesomeIcon icon={faFirstdraft} className={styles.icon} />
          <span className={styles.span}>DCODELAB</span>
        </h1>
        <p className={styles.p}>
          {new Date().getFullYear()} DCODELAB &copy; ALL RIGHTS RESERVED.
        </p>
      </header>

      <section className={styles.section}>
        {vids.map((vid, index) => {
          return (
            <article
              className={styles.article}
              key={vid}
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
              onClick={MouseClick}
            >
              <div className={styles.inner}>
                <div className={styles.txt}>
                  <h2>{index + 1}</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias iste rerum similique ipsa deserunt asperiores.
                  </p>
                </div>

                <figure className={styles.figure}>
                  <video src={vid} loop muted></video>
                </figure>
              </div>
            </article>
          );
        })}
      </section>

      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href="#" className={styles.a}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </a>
          </li>
          <li className={styles.li}>
            <a href="#" className={styles.a}>
              <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            </a>
          </li>
        </ul>
      </nav>

      <aside className={`${styles.aside} ${hide && styles.on}`}>
        <div className={styles.txtBox}>
          <h2>{aside.tit}</h2>
          <p>{aside.con}</p>
        </div>
        <div className={styles.vidBox}>
          <video src={aside.vidSrc} loop muted autoPlay></video>
        </div>
        <span className={styles.btnClose} onClick={btnClose}>
          close
        </span>
      </aside>
    </main>
  );
}
