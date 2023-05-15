import React from "react";
import styles from "./Page6.module.css";
import { NavLink } from "react-router-dom";

const Page6 = () => {
  const onButton = () => {};
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        No more worries <br /> Start Consultation Today
      </h1>
      <NavLink to='/appointment'><button className={styles.button} onClick={onButton}>
        Book Appointment
      </button></NavLink>
    </div>
  );
};

export default Page6;
