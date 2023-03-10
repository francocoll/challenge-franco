import React, { useEffect, useState } from 'react'
import styles from './Background.module.css'
import { motion } from "framer-motion";

export const Background = (props) => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  let { random } = props

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20").then((response) => {
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

  return (
    <div>
      {loading ? (
        ""
      ) : (
        <>
          <motion.div
            className={styles.fondo}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 7 }}
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.results[random].backdrop_path})`, }}>
          </motion.div>
        </>
      )}
    </div >
  )
}

export default Background