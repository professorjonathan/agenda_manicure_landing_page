import React from 'react';
import styles from "./Recursos.module.css";
// import celular from "../assets/celular.png";
import video from "../assets/video.mp4";
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';

const Recursos = () => {
    return (
        <>
            <div id="recursos">
                <div>
                    <h1 className={styles.titulo}>  
                        Veja o que nosso App oferece:
                    </h1>
                </div>
                <div className={styles.container}>

                    <div className={styles.recursos}>
                        <div className={styles.itemRecursos}>
                            <SmartphoneRoundedIcon fontSize="large" sx={{ fill: "#ff66c4" }} />
                            <h3 className={styles.tituloRecursos}>Agenda Portátil</h3>
                            <h5 className={styles.subtituloRecursos}>Tenha em suas mãos!</h5>
                        </div>
                        <div className={styles.itemRecursos}>
                            <NotificationsActiveRoundedIcon fontSize="large" sx={{ fill: "#ff66c4" }} />
                            <h3 className={styles.tituloRecursos}>Notificações</h3>
                            <h5 className={styles.subtituloRecursos}>Receba lembretes de suas agendas!</h5>
                        </div>
                    </div>

                    <div className={styles.video}>
                        <video src={video} width="240px" controls loop ></video>
                        {/* <img src={celular} /> */}
                    </div>

                    <div className={styles.recursos}>
                        <div className={styles.itemRecursos}>
                            <GroupAddRoundedIcon fontSize="large" sx={{ fill: "#ff66c4" }} />
                            <h3 className={styles.tituloRecursos}>Cadastro de Clientes</h3>
                            <h5 className={styles.subtituloRecursos}>Gerencie o seu negócio!</h5>
                        </div>
                        <div className={styles.itemRecursos}>
                            <SavingsRoundedIcon fontSize="large" sx={{ fill: "#ff66c4" }} />
                            <h3 className={styles.tituloRecursos}>Controle Financeiro</h3>
                            <h5 className={styles.subtituloRecursos}>Tenha o domínio de suas finanças!</h5>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Recursos;