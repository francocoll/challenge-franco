import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Titles.module.css";
import original from "../../assets/original.svg";

export const Titles = (props) => {
  let { random } = props;
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20").then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.titlesContainer}>
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
      >
        <img src={original} alt="Original" />
      </motion.p>
      {loading ? (
        ""
      ) : (
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, }}
        >
          {data.results[random].original_title}
        </motion.h2>
      )}
    </div>
  );
};
