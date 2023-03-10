import React, { useContext } from "react";
import Dropzone from "../Dropzone/Dropzone";
import { Load } from "../Load/Load";
import { Text } from "../Text/Text";
import { SuccessScreen } from "../SuccessScreen/SuccessScreen";
import { MoviesContext } from "../../../context/MoviesProvider";
import styles from "./Container.module.css";


export const MainContainer = () => {
  const context = useContext(MoviesContext);
  const { uploading, success } = context;

  return (
    <div className={styles.container}>
      <h2>AGREGAR PELÍCULA</h2>
      {uploading ? <Load /> : <Dropzone />}
      <Text />
      {success && <SuccessScreen />}
    </div>
  );
};
