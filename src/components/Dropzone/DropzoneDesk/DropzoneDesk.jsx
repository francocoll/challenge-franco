import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MoviesProvider";
import { motion } from "framer-motion";
import { MainContainer } from "../Container/Container";
import cerrar from "../../../assets/cerrar.svg";
import styles from "./DropzoneDesk.module.css";
import mobile from '../../../hooks/isMobile'

export const DropzoneDesk = () => {
  const context = useContext(MoviesContext);
  const { dropzoneDesk, exitModal, setSuccess, setUploading, setReady } =
    context;
  const isMobile = mobile();

  function Exit() {
    setSuccess(false);
    exitModal();
    setUploading(false);
    setReady(false);
  }

  return (
    <>
      {dropzoneDesk && (
        <div className={styles.container}>
          <motion.div
            className={styles.back}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0 },
            }}
          >
            {isMobile ? null : (
              <img
                src={cerrar}
                alt="cerrar menu"
                onClick={Exit}
                style={{ cursor: 'pointer' }}
              />

            )}
            <MainContainer />
          </motion.div>
        </div>
      )}
    </>
  );
};
