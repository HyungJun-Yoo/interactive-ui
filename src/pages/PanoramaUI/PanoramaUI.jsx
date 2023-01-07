import React, { useEffect } from "react";
import styles from "./PanoramaUI.module.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import bg from "/src/assets/panoramas/bg.mp4";
import pattern from "/src/assets/panoramas/pattern.jpg";
import member1 from "/src/assets/panoramas/member1.jpg";
import member2 from "/src/assets/panoramas/member2.jpg";
import member3 from "/src/assets/panoramas/member3.jpg";
import intro from "/src/assets/panoramas/intro.mp4";
import tit from "/src/assets/panoramas/tit.png";
import robot from "/src/assets/panoramas/robot.png";
import txt from "/src/assets/panoramas/txt.png";
import btn from "/src/assets/panoramas/btn.png";
import reflect from "/src/assets/panoramas/reflect.png";
import loop from "/src/assets/panoramas/loop.mp4";
import txt2 from "/src/assets/panoramas/txt2.png";
import line from "/src/assets/panoramas/line.png";

import {
  faAndroid,
  faApple,
  faFacebookSquare,
  faGooglePlay,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBolt,
  faCloud,
  faCode,
  faEnvelope,
  faList,
  faRss,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function PanoramaUI() {
  useEffect(() => {
    document.querySelector("body").className = styles.body;
  }, []);

  return (
    <main className={styles.wrap}>
      <video src={bg} loop autoPlay muted></video>

      <section id={styles.circle}>
        <article className={styles.face1}>
          <h1>Co Company</h1>
          <div className={styles.inner}>
            <div>
              <p>
                <FontAwesomeIcon icon={faAndroid} className={styles.icon} />
              </p>
              <h2>Android</h2>
            </div>
            <div>
              <p>
                <FontAwesomeIcon icon={faApple} className={styles.icon} />
              </p>
              <h2>Apple</h2>
            </div>
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className={styles.icon}
                />
              </p>
              <h2>Twitter</h2>
            </div>
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className={styles.icon}
                />
              </p>
              <h2>Facebook</h2>
            </div>
            <div>
              <p>
                <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
              </p>
              <h2>Youtube</h2>
            </div>
            <div>
              <p>
                <FontAwesomeIcon icon={faGooglePlay} className={styles.icon} />
              </p>
              <h2>Google</h2>
            </div>
          </div>
        </article>

        <article className={styles.face2}>
          <h1>What's New</h1>
          <div className={styles.inner}>
            <div>
              <h2>News Article</h2>
              <img src={pattern} alt="뉴스소개 이미지" />
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                debitis modi reiciendis ab aliquid doloremque ipsa, molestias
                culpa dolorem ad cumque pariatur saepe, amet, assumenda quo
                error tenetur voluptatum placeat.
              </p>
            </div>
          </div>
        </article>

        <article className={styles.face3}>
          <h1>Members</h1>
          <div className={styles.inner}>
            <div>
              <div className={styles.pic}>
                <img src={member1} alt="member1" />
              </div>
              <div className={styles.con}>
                <h2>Member1 Information</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, quia.
                </p>
                <span>2022-01-03</span>
              </div>
            </div>

            <div>
              <div className={styles.pic}>
                <img src={member2} alt="member2" />
              </div>
              <div className={styles.con}>
                <h2>Member2 Information</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, quia.
                </p>
                <span>2020-11-08</span>
              </div>
            </div>

            <div>
              <div className={styles.pic}>
                <img src={member3} alt="member3" />
              </div>
              <div className={styles.con}>
                <h2>Member3 Information</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, quia.
                </p>
                <span>2018-04-17</span>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.face4}>
          <h1>Advertisement</h1>
          <div className={styles.inner}>
            <div>
              <video src={intro} controls autoPlay loop></video>
              <h2>Promotion</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br />
                <br />
                Voluptatibus voluptatum, rem delectus earum ex accusantium
                facere quis optio quae deleniti nam nihil nulla veritatis
                mollitia consectetur maxime vel ut? Animi.
              </p>
            </div>
            <div>
              <h2>Information</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <em>2022.03.02</em>
            </div>
          </div>
        </article>

        <article className={styles.face5}>
          <h1>DCODELAB</h1>
          <div className={styles.inner}>
            <div>
              <h2>
                <img src={tit} alt="DCODELAB" />
              </h2>
              <div className={styles.pic}>
                <img src={robot} alt="robot" />
              </div>
              <img src={txt} alt="Who's Next?" />
              <Link to="#">
                <img src={btn} alt="button" />
              </Link>
              <img src={reflect} alt="reflection" className={styles.reflect} />
            </div>
          </div>
        </article>

        <article className={styles.face6}>
          <h1>Services</h1>
          <div className={styles.inner}>
            <div>
              <div className={styles.div}>
                <FontAwesomeIcon icon={faCode} className={styles.icon} />
              </div>
              <div className={styles.con}>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div>
              <div className={styles.div}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              </div>
              <div className={styles.con}>
                <h2>Culpa, tempora.</h2>
                <p>
                  Modi repudiandae possimus exercitationem, id tempora
                  voluptatem sed?
                </p>
              </div>
            </div>

            <div>
              <div className={styles.div}>
                <FontAwesomeIcon icon={faList} className={styles.icon} />
              </div>
              <div className={styles.con}>
                <h2>Optio, porro.</h2>
                <p>
                  Sunt voluptatibus ut adipisci animi eaque consequatur
                  expedita.
                </p>
              </div>
            </div>

            <div>
              <div className={styles.div}>
                <FontAwesomeIcon icon={faRss} className={styles.icon} />
              </div>
              <div className={styles.con}>
                <h2>Deserunt, fugit!</h2>
                <p>Excepturi fuga dicta incidunt quaerat ad culpa laborum?</p>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.face7}>
          <h1>Promotion</h1>
          <div className={styles.inner}>
            <div>
              <div className={styles.div}>
                <video src={loop} autoPlay loop muted></video>
                <h2>
                  Promote <br /> Your <br /> Company
                </h2>
                <img src={txt2} alt="txt2" />
                <img src={line} alt="line" />
              </div>
            </div>
          </div>
        </article>

        <article className={styles.face8}>
          <h1>Temperature</h1>
          <div className={styles.inner}>
            <div>
              <h2>Weather</h2>
              <FontAwesomeIcon icon={faCloud} className={styles.icon} />
              <span>
                26<em>o</em>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faSun} className={styles.icon} />
              <h3>Sunny</h3>
              <p>Afternoon Temperature</p>
              <span>
                23<strong>o</strong>
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faBolt} className={styles.icon} />
              <h3>Lightning</h3>
              <p>Night Temperature</p>
              <span>
                28<strong>o</strong>
              </span>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
