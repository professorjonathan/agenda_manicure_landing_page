import React from 'react';
import styles from "./Contato.module.css";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const Contato = () => {
  return (
    <>
      <div id="contato">
        <div className={styles.container}>
          <h1 className={styles.titulo}>
            Nós <FavoriteRoundedIcon sx={{ fill: "red", fontSize: "70px", marginBottom: "-12px" }} /> novos amigos!
          </h1>
          <a target="blank" href="https://www.instagram.com/agenda_manicure">
            <img src={instagram} className={styles.instagram} alt="logo instagram" />
          </a>
          <a target="blank" href="https://www.facebook.com/profile.php?id=61550573267282">
            <img src={facebook} className={styles.facebook} alt="logo facebook" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contato;