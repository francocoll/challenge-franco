import React, { useState } from "react";
import { motion } from "framer-motion";
import play from "../../assets/play-item.svg";
import star from "../../assets/starvote.svg";
import styles from "./PopularItem.module.css";

const itemList = {
  visible: { x: 0, transition: { duration: 0.6 } },
  hidden: { x: 500 },
};

export const PopularItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  let { bg, title, vote, date } = props;
  const dateCut = date.substring(0, 4);

  return (
    <motion.div
      className={styles.itemContainer}
      variants={itemList}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${bg}')`,
      }}
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
            <h4 className={styles.title}>{title}</h4>
          </div>
        )}
        {isHover ? (
          <div className={styles.hoverBg}>
            <div className={styles.playHover}></div>
            <div className={styles.titleHover}>{title}</div>
            <p className={styles.vote}>
              <img
                src={star}
                alt="votes"
                style={{ marginRight: "5px" }}
              />
              {vote}
            </p>
            <p className={styles.date}>{dateCut}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};
