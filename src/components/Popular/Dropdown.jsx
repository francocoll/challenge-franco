import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
import check from "../../assets/checked.svg";
import styles from "./Dropdown.module.css";
import { motion } from "framer-motion";

export const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    { active: 0, text: "POPULARES" },
    { active: 1, text: "MIS PELICULAS" },
  ];
  const [checked, setChecked] = useState(0);

  return (
    <div className={styles.dropContainer}>
      <div className={styles.dropButton} onClick={() => setIsActive(!isActive)}>
        <span>VER: </span>
        {selected}
        <img src={arrow} alt="arrow"></img>
      </div>
      {isActive && (
        <>
          <motion.div className={styles.arrow}
            style={{ rotate: "45deg" }}
            initial={{ y: -90 }}
            animate={{ y: 1, duration: 5 }}
          />
          <motion.div className={styles.dropContent}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
          >
            {options.map((option, index) => (
              <div className={styles.dropItem}
                onClick={() => {
                  setSelected(option.text);
                  setIsActive(false);
                  setChecked(index);
                }}
                key={option.active}>
                {option.text}
                {checked === option.active ? (
                  <img src={check} alt="checked" />
                ) : (
                  ""
                )}
              </div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};
