import React from "react";
import styles from "./Page1.module.css";
import { NavLink } from "react-router-dom";

function Page1() {
  const onButton = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.head}>
          You should seek Someone, when you feel low...
        </h1> <strong> <p className={styles.para}>People are incapable of not caring. </p></strong>
      
        <p className={styles.para}>
          Discover tranquility within with Calm Soul: Your Path to Inner Peace
          and Emotional Wellness
        </p>
        <br />

        <NavLink to="/chat">
          <button className={styles.button} onClick={onButton}>
            Chat Now
          </button>
        </NavLink>
        <NavLink to="/appointment">
          <button className={styles.button} onClick={onButton}>
            Book Appointment
          </button>
        </NavLink>
      </div>
      <div className={styles.rightColumn}>
        <img
          src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3VsdGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="mental_health"
        />
      </div>
    </div>
  );
}
export default Page1;
