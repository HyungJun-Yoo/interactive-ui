import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Link to={"/ProfileCard"}>
        <p>ProfileCard</p>
      </Link>

      <Link to={"/FullScreenVideo"}>
        <p>FullScreenVideo</p>
      </Link>
    </div>
  );
}
