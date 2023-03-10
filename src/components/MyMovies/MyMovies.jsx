import React, { useState } from "react";
import play from "../../assets/play-item.svg";
import { motion } from "framer-motion";
import styles from "./MyMovies.module.css";

const itemList = {
  visible: { x: 0, transition: { duration: 0.7 } },
  hidden: { x: 500 },
};

export const MyMovies = (props) => {
  let { bg, title } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className={styles.itemContainer}
      variants={itemList}
      whileTap={{ scale: 0.95 }}
      style={{ backgroundImage: `url(${bg})` }}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={styles.items}>
        {isHover ? (
          ""
        ) : (
          <div>
            <div className={styles.play}>
              {" "}
              <img src={play} alt="movieimage" />
            </div>
            <h4>{title}</h4>
          </div>
        )}
        {isHover ? (
          <div className={styles.hover}>
            <div className={styles.playHover}></div>
            <div className={styles.titleHover}>{title}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};
