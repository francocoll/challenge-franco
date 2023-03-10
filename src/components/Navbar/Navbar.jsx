import React, { useContext } from "react";
import { motion } from "framer-motion";
import mobile from "../../hooks/isMobile";
import { MoviesContext } from "../../context/MoviesProvider";
import styles from "./Navbar.module.css";
import user from "../../assets/user.svg";
import campana from "../../assets/campana.svg";
import menu from "../../assets/menu.svg";
import plus from "../../assets/plus.svg";
import title from "../../assets/title.svg";

export const Navbar = () => {
  const context = useContext(MoviesContext);
  const { openModal } =
    context;
  const isMobile = mobile();

  return (
    <div className={styles.container}>
      {isMobile ? (
        <div onClick={() => openModal()}>
          <motion.div
            style={{ display: 'flex', justifyContent: 'center', borderRadius: '20px', border: '1px solid #FFFFFF', boxSizing: 'border-box', width: '36px', height: '36px' }}
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 1, delay: 3 } }}
          >
            <img style={{ width: '17px', height: '35px' }} src={plus} alt="add button" />
          </motion.div>
        </div>
      ) : (
        <>
          <div className={styles.menuIconContainer} >
            <motion.img
              alt='nada'
              src={menu}
              initial={{ y: -100 }}
              animate={{ y: 0, transition: { duration: 1, delay: 3.4 } }}
              whileHover={{
                scale: 1.2,
                transition: { delay: 0, duration: 0.2 },
              }}
            />
          </div>
          <motion.img
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 1, delay: 3.2 } }}
            whileHover={{ scale: 1.2, transition: { delay: 0, duration: 0.2 } }}
            src={campana}
            alt="notifications"
          />
        </>
      )}

      <div className={styles.userContainer}>
        <motion.img
          alt='user'
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 1, delay: 3.3 } }}
          whileHover={{ scale: 1.2, transition: { delay: 0, duration: 0.1 } }}
          src={user}
        />
      </div>
      <div className={styles.headerTitleContainer}>
        <motion.img
          alt='nada'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 2, delay: 0 },
          }}
          src={title}
        />
        {isMobile ? null : (
          <motion.div className={styles.headerButton}
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 1, delay: 3 } }}
            onClick={() => openModal()}
          >
            <img src={plus} alt="add button" />
            <p>AGREGAR PELÍCULA</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
