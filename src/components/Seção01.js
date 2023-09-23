import React from 'react';
import styles from "./Seção01.module.css";
import celular from "../assets/celular.png";
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

const Seção01 = () => {
    return (
        <>
            <div id="agenda">
            <div className={styles.container}>
                <div className={styles.celular}>
                    <img src={celular} alt="Imagem celular" />
                </div>

                <div className={styles.containerTexto}>
                    <h1 className={styles.titulo}>Agenda Manicure</h1>
                    <h2 className={styles.subtitulo}>Agende com Estilo. Brilhe com Confiança!</h2>
                    <ul className={styles.listaFuncionalidades}>
                        <li className={styles.funcionalidades}><VerifiedRoundedIcon fontSize="medium" /> Agendamentos</li>
                        <li className={styles.funcionalidades}><VerifiedRoundedIcon fontSize="medium" /> Notificações</li>
                        <li className={styles.funcionalidades}><VerifiedRoundedIcon fontSize="medium" /> Cadastro de Clientes</li>
                        <li className={styles.funcionalidades}><VerifiedRoundedIcon fontSize="medium" /> Controle Financeiro</li>
                        <li className={styles.funcionalidades}><VerifiedRoundedIcon fontSize="medium" /> Tudo isso e muito mais...</li>
                    </ul>
                </div>
            </div>
            </div>
        </>

    )
}

export default Seção01;