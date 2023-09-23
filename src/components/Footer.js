import React from 'react';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
        <p className={styles.texto}>
            © Agenda Manicure 2023. Todos os direitos reservados.
        </p>
    </footer>
  )
}

export default Footer;