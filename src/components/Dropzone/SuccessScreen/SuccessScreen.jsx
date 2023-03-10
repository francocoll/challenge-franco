import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MoviesProvider";
import mobile from "../../../hooks/isMobile";
import styles from "./SuccessScreen.module.css";


export const SuccessScreen = () => {
  const context = useContext(MoviesContext);
  const {
    uploadedName,
    setSuccess,
    exitModal,
    setReady,
  } = context;
  const isMobile = mobile();

  function ExitSuccess() {
    setSuccess(false);
    setReady(false);
  }

  function ExitSuccessDesktop() {
    setSuccess(false);
    setReady(false);
    exitModal();
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.success}>¡FELICITACIONES!</p>
        <p className={styles.text}>{uploadedName} FUE CORRECTAMENTE SUBIDA.</p>
      </div>
      {isMobile ? (

        <input className={styles.input} type="button" value="IR A HOME" onClick={ExitSuccess} />

      ) : (

        <input className={styles.input} type="button" value="IR A HOME" onClick={ExitSuccessDesktop} />

      )}
    </div>
  );
};
