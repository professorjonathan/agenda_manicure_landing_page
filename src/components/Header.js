import React from 'react'
import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>

                    <div className={styles.menu}>
                        <div className={styles.agendaManicure}>
                            <a href="#agenda">Agenda Manicure</a>
                        </div>
                    </div>

                    <div className={styles.menu} >
                        <div className={styles.download}>
                            <a className={styles.itemMenu} href="#download">Download</a>
                        </div>
                        <div className={styles.recursos}>
                            <a className={styles.itemMenu} href="#recursos">Recursos</a>
                        </div>
                        <div className={styles.contato}>
                            <a className={styles.itemMenu} href="#contato">Contato</a>
                        </div>

                    </div>

                </div>
            </header>
        </>
    )
}

export default Header;