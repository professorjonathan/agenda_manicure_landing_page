import React from 'react';
import styles from "./Download.module.css";
import google from "../assets/google.png";
import apple from "../assets/apple.png";

const Download = () => {
  return (
    <>
      <div id="download">
        <div className={styles.container}>
          <h1 className={styles.titulo}>Descubra novas possibilidades!</h1>
          <h3 className={styles.subtitulo}>
            Nosso aplicativo está disponível para seu dispositivo! <br />
            Baixe agora para começar!
          </h3>
          <a target="blank" href="https://onelink.to/94qnkx">
            <img src={google} className={styles.google} alt="icone google" />
          </a>
          <a target="blank" href="https://onelink.to/94qnkx">
            <img src={apple} className={styles.apple} alt="icone apple" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Download;