import React from "react";
import { motion } from "framer-motion";
import play from "../../assets/play.svg";
import plus from "../../assets/plus.svg";
import styles from "./Buttons.module.css";

export const Buttons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <motion.button
        className={styles.playButton}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.1 }}
      >
        <img src={play} alt="add icon" />
        REPRODUCIR
      </motion.button>
      <motion.button
        className={styles.listButton}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.6 }}
      >
        <img src={plus} alt="add icon" />
        MI LISTA
      </motion.button>
    </div>
  );
};
