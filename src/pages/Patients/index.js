import React from 'react';

import { faTint, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

function Patients() {
  const classes = useStyles();

  function handleDatasheet() {
    const el = document.getElementById('drawer-datasheet');
    if (el.classList.contains('drawer-hide')) {
      el.classList.remove('drawer-hide');
    } else {
      el.classList.add('drawer-hide');
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{ fontWeight: 700, color: 'black', marginBottom: 2.5 }}
                >
                  PACIENTE
                </span>
                <span style={{ marginBottom: '1em' }}>
                  ANDRÉ PAULO SILVA SANTOS
                </span>
                <span
                  style={{ fontWeight: 700, color: 'black', marginBottom: 2.5 }}
                >
                  CPF
                </span>
                <span style={{ marginBottom: '1em' }}>123.456.789-10</span>
              </div>
              <div
                style={{
                  width: 125,
                  textAlign: 'left',
                  position: 'absolute',
                  right: 140,
                  marginTop: '1em',
                }}
              >
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'black',
                    wordWrap: 'break-word',
                  }}
                >
                  <span style={{ fontSize: 39 }}>TIPO</span> SANGUÍNEO
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  right: 97,
                }}
              >
                <FontAwesomeIcon
                  icon={faTint}
                  style={{ fontSize: 100, color: '#ed3c3e' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  right: 76,
                  width: 55,
                  height: 55,
                  backgroundColor: 'rgb(51, 51, 51)',
                  fontSize: 18,
                  borderRadius: '50%',
                  color: 'white',
                  fontWeight: 800,
                  padding: '10px 10px 10px 6px',
                  marginTop: 2,
                  border: '5px solid #ffffff',
                }}
              >
                <span>AB+</span>
              </div>
            </div>
            <div className="drawer-patient">
              <div className="drawer-header">
                <span className="title">CADASTRO DO PACIENTE</span>
              </div>
              <div id="drawer-datasheet" className="drawer-body">
                <div className="drawer-datasheet-body">
                  <span className="title-datasheet">NOME: </span>
                  <span className="subtitle-datasheet">VICTOR REINOR</span>
                </div>
                <div className="drawer-datasheet-body">
                  <span className="title-datasheet">SEXO: </span>
                  <span className="subtitle-datasheet">MASCULINO</span>
                </div>
                <div className="drawer-datasheet-body">
                  <span className="title-datasheet">ANIVERSARIO: </span>
                  <span className="subtitle-datasheet">24/01/1998</span>
                </div>
                <div className="drawer-datasheet-body">
                  <span className="title-datasheet">CIDADE: </span>
                  <span className="subtitle-datasheet">
                    Mirassol - São Paulo
                  </span>
                </div>
                <div className="drawer-datasheet-body">
                  <span className="title-datasheet">ENDERECO: </span>
                  <span className="subtitle-datasheet">
                    Rua flores bela, 2729, centro
                  </span>
                </div>
                <div className="drawer-datasheet-body">
                  <span className="title-datasheet">ESTADO CIVIL: </span>
                  <span className="subtitle-datasheet">DIVORCIADO</span>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Patients;
