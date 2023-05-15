import React, { useState } from "react";
import styles from "./Appointment.module.css";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cunsultancy, setCunsultancy] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Appointment has been Scheduled and sent to your mail. Thank you!")
    navigate("/");
  };

  return (
    <div className={styles.aapoint}>
      <h2 className={styles.head}>Book Appointment</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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

export default UserForm;
