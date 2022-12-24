import React, { useState, useEffect } from "react";

import styles from "./ProfileCard.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import member1 from "/src/assets/members/member1.jpg";
import member2 from "/src/assets/members/member2.jpg";
import member3 from "/src/assets/members/member3.jpg";
import member4 from "/src/assets/members/member4.jpg";

export default function ProfileCard() {
  const [state, setState] = useState({
    id: "member1",
    src: member1,
  });

  useEffect(() => {
    if (state.id === "member1")
      document.querySelector("body").className = styles.member1;
    if (state.id === "member2")
      document.querySelector("body").className = styles.member2;
    if (state.id === "member3")
      document.querySelector("body").className = styles.member3;
    if (state.id === "member4")
      document.querySelector("body").className = styles.member4;
  }, [state]);

  const othersChange = (props) => {
    setState(props);
  };

  return (
    <section className={styles.wrap}>
      <nav className={styles.menu}>
        <span className={styles.btn} role="button">
          <FontAwesomeIcon icon={faBars} />
        </span>
        <span className={styles.btn} role="button">
          <FontAwesomeIcon icon={faStickyNote} />
        </span>
      </nav>

      <article className={styles.profile}>
        <img src={state.src} alt="프로필 이미지"></img>
        <h1>DCODELAB</h1>
        <p>UI/UX INTERACTIVE DEVELOPER</p>

        <div className={styles.btnView} role="button">
          VIEW MORE
        </div>
      </article>

      <ul className={styles.contact}>
        <li>
          <FontAwesomeIcon icon={faFacebookF} />
          <span>Visit My Facebook page.</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>InterActive@email.com</span>
        </li>
      </ul>

      <nav className={styles.others}>
        <span
          className={state.id === "member1" ? styles.on : ""}
          button="role"
          onClick={() => othersChange({ id: "member1", src: member1 })}
        ></span>
        <span
          className={state.id === "member2" ? styles.on : ""}
          button="role"
          onClick={() => othersChange({ id: "member2", src: member2 })}
        ></span>
        <span
          className={state.id === "member3" ? styles.on : ""}
          button="role"
          onClick={() => othersChange({ id: "member3", src: member3 })}
        ></span>
        <span
          className={state.id === "member4" ? styles.on : ""}
          button="role"
          onClick={() => othersChange({ id: "member4", src: member4 })}
        ></span>
      </nav>
    </section>
  );
}
