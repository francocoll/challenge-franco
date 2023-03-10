import React, { useState, createContext } from "react";

const MoviesContext = createContext();

export default function MoviesProvider(props) {
  const [ready, setReady] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isUserEmpty, setIsUserEmpty] = useState(false);
  const [dropzoneDesk, setDropzoneDesk] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userMovie, setUserMovie] = useState({
    img: "",
    title: "",
  });
  let movies = [];
  let localString = localStorage.getItem("myMovies");
  let localArray = JSON.parse(localString);

  if (localArray === null) {
    localArray = [];
  }
  const [uploadedName, setUploadedName] = useState("");

  const openModal = () => {
    setDropzoneDesk(true);
  };

  const exitModal = () => {
    setDropzoneDesk(false);
  };

  return (
    <MoviesContext.Provider
      value={{
        userMovie,
        setUserMovie,
        movies,
        localString,
        localArray,
        uploading,
        setUploading,
        ready,
        setReady,
        success,
        setSuccess,
        uploadedName,
        setUploadedName,
        isUserEmpty,
        setIsUserEmpty,
        dropzoneDesk,
        setDropzoneDesk,
        openModal,
        exitModal,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}

export { MoviesContext };
