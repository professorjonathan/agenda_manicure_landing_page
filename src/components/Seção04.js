import React from 'react';
import styles from "./Seção04.module.css";
import { Button } from '@mui/material';

const Seção04 = () => {
  return (
    <div className={styles.container}>
      <h1>
        Não espere. <br />
        Comece!
      </h1>
      <a target="blank" href="https://onelink.to/94qnkx">
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff66c4",
          borderColor: "#ff66c4",
          padding: '10px 25px',
          '&:hover': {
            backgroundColor: '#fff',
            borderColor: '#fff',
            color: '#ff66c4'
          },
          '@media (max-width: 767px)': {
            fontSize: 'x-small',
            padding: '8px'
          }
        }}>
        Vamos começar!
      </Button>
      </a>
    </div>
  )
}

export default Seção04;