import React from "react";
import styles from "./Page3.module.css";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
const Page3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <img
          src="https://plus.unsplash.com/premium_photo-1672292535264-ef6dab7d6a90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="mental_health"
          className={styles.image}
        />
      </div>
      <div className={styles.rightColumn}>
        <h1 className={styles.heading}>
         Start Your Emotional and Mental Wellness Journey
        </h1>
        <p className={styles.paragraph}>
       <strong>Looking for a therapist?</strong>  
         <br /> You are in a Right Place!
        </p> <p className={styles.paragraph}>
        
        </p>
        
        <div className={styles.bcontainer}>
          <div className={styles.brow}>
            <button className={styles.bbutton}>
              <FaUser className={styles.bicon} />
              <span className={styles.btext}>Profile</span>
            </button>
            <button className={styles.bbutton}>
              <FaEnvelope className={styles.bicon} />
              <span className={styles.btext}>Inbox</span>
            </button>
          </div>
          <div className={styles.brow}>
            <button className={styles.bbutton}>
              <FaPhone className={styles.bicon} />
              <span className={styles.btext}>Contact</span>
            </button>
            <button className={styles.bbutton}>
              <FaMapMarkerAlt className={styles.bicon} />
              <span className={styles.btext}>Location</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
