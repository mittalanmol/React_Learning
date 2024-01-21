import React from "react";
import styles from "./WelcomeMessage.module.css";
function WelcomeMessage() {
  return <p className={styles.message}>Enjoy your day</p>;
}

// if there is no todo item , it will display
export default WelcomeMessage;
