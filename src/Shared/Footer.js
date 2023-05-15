import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.foot}>
      <div className={styles.container}>
        <h3> &copy; 2023 CalmSoul. All rights reserved.</h3>
        <ul>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className={styles.social_media}>
          <a href="https://www.instagram.com/__sathvik.k__/">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/shivanagouda__s.a/">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/BhattSathv83051">
            <FaTwitterSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
