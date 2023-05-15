import React, { useState } from "react";
import styles from "./GetStarted.module.css";
 
const GetStarted = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cunsultancy, setCunsultancy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.aapoint}>
      <h2 className={styles.head}>Book Appointment</h2>
      <form className={styles.form} onSubmit="/">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="number"
          id="phone"
          maxlength="10"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="Cunsultancy">Field of Cunsultancy:</label>
        <input
          type="text"
          id="Cunsultancy"
          value={cunsultancy}
          onChange={(e) => setCunsultancy(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GetStarted;
