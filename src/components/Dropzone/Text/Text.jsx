import React, { useState, useContext } from "react";
import { MoviesContext } from "../../../context/MoviesProvider";
import mobile from '../../../hooks/isMobile'
import styles from "./Text.module.css";

export const Text = () => {
  const Swal = require('sweetalert2')
  const context = useContext(MoviesContext);
  const {
    exitModal,
    userMovie,
    movies,
    localArray,
    setUploading,
    setUploadedName,
  } = context;
  const [movieTitle, setMovieTitle] = useState("");
  const isMobile = mobile();

  function inputChangeHandler(evento) {
    let value = evento.target.value;
    setMovieTitle(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    userMovie.title = movieTitle;

    if (userMovie.img !== "") {
      setUploading(true);
      setTimeout(() => {
        movies.push(userMovie);
        localArray.push(userMovie);
        setUploadedName(userMovie.title);
        localStorage.setItem("myMovies", JSON.stringify(localArray));
      }, 4000)

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes subir una imagen',
        
      })
    }
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        className={styles.inputText}
        minLength={3}
        maxLength={30}
        type="text"
        onChange={inputChangeHandler}
        placeholder="TÍTULO"
        value={movieTitle}
        name="title"
        required
      />
      <input className={styles.input} type="submit" placeholder="TÍTULO" value="SUBIR PELÍCULA" />
      {isMobile && (
        <div className={styles.toggle} onClick={(e) => exitModal()}>
          <input className={styles.inputExit} type="button" value="SALIR"  />
        </div>
      )}
    </form>
  );
};
