import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { MoviesContext } from "../../../context/MoviesProvider";
import styles from "./Load.module.css";


export const Load = () => {
  const context = useContext(MoviesContext);
  const { ready, setReady, setSuccess, setUploading } = context;

  let [counter, setCounter] = useState(0);

  useEffect(() => {
    const loop = setInterval(function () {
      if (counter === 101) {
        stopLoop();
        setReady(true);
        setSuccess(true);
        setUploading(false);
      } else {
        setCounter(counter++);
      }
    }, 75);

    function stopLoop() {
      clearInterval(loop);
    }
  }, []);

  return (
    <div className={styles.load}>
      <p className={styles.loadingText}>CARGANDO {counter}%</p>
      {ready && <p className={styles.text}>¡LISTO!</p>}
      <div className={styles.bars}>
        <div className={styles.staticBar}>
          <motion.div
            className={styles.loadingBar}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.1, duration: 4 }}
          />
        </div>
      </div>
    </div>
  );
};
