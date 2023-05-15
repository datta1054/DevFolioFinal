import React from "react";
import styles from "./Page2.module.css";
import { FaUser, FaVideo } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>The Most Connective and Interactive</h1>
        <p className={styles.subheading}>
          Online Couscelling and Therapy consultation Platform in India and
          Global
        </p>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <FaUser size={50} />
          <h3>50,000 +</h3>
          <p>No. of People Healed</p>
        </div>
        <div className={styles.column}>
          <SiGooglemaps size={50} />
          <h3>80 +</h3>
          <p>Countries Reached</p>
        </div>
        <div className={styles.column}>
          <FaVideo size={50} />
          <h3>25,000 +</h3>
          <p>No. of Session Given</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
