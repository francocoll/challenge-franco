import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { PopularItem } from "./PopularItem";
import { Dropdown } from "./Dropdown";
import { MyMovies } from "../MyMovies/MyMovies";
import { MoviesContext } from "../../context/MoviesProvider";
import styles from "./Popular.module.css";

export const list = {
  visible: {
    transition: {
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: { transition: { when: "afterChildren" } },
};

export const items = {
  visible: { opacity: 1, x: 0, transition: { duration: 1.8 } },
  hidden: { opacity: 0, x: 1000 },
};

export const Popular = () => {
  const context = useContext(MoviesContext);
  const { localArray } = context;
  const [isPopularOn, setIsPopularOn] = useState(true);
  const [selected, setSelected] = useState("POPULARES");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  if (localArray === []) {
    setIsEmpty(true);
  }

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20").then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      }).then((data) => {
        setData(data);
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  let variants = {
    hidden: { y: 1500, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 3, duration: 1.1 }, },
  };

  return (
    <motion.div
      className={styles.popularContainer}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <Dropdown
        selected={selected}
        setSelected={setSelected}
        setIsPopularOn={setIsPopularOn}
        isPopularOn={isPopularOn}
      />
      {selected === "POPULARES" ? (
        <motion.div
          className={styles.itemsContainer}
          initial="hidden"
          animate="visible"
          variants={list}
        >
          {loading ? (
            ""
          ) : (
            <>
              {data.results.slice(0, 4).map((movie) => {
                return (
                  <PopularItem
                    variants={list}
                    key={movie.id}
                    title={movie.original_title}
                    bg={movie.backdrop_path}
                    vote={movie.vote_average}
                    date={movie.release_date}
                  />
                );
              })}
            </>
          )}
        </motion.div>
      ) : (
        <motion.div className={styles.itemsUserContainer}
          initial="hidden"
          animate="visible"
          variants={list}>
          {localArray.map((movie, index) => {
            return <MyMovies key={index} title={movie.title} bg={movie.img} />;
          })}
          {isEmpty ? (
            ""
          ) : (
            null
          )}
        </motion.div>
      )}
    </motion.div>
  );
};
