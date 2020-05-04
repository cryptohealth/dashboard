import React from 'react';

import { faTint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from 'material-table';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    height: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

function Patients() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Alergia', field: 'alergia' },
      { title: 'Categoria', field: 'categoria' },
      { title: 'Gravidade', field: 'gravidade' },
      { title: 'Reações', field: 'reacao' },
      { title: 'Status Verificação', field: 'statusVerificacao' },
    ],
    data: [
      {
        alergia: 'PENICILINA G',
        categoria: 'MEDICAMENTO',
        gravidade: 'EXTREMA',
        reacao: 'URTICARIA',
        statusVerificacao: 'CONFIRMADO',
      },
      {
        alergia: 'PENICILINA G',
        categoria: 'MEDICAMENTO',
        gravidade: 'EXTREMA',
        reacao: 'URTICARIA',
        statusVerificacao: 'EM ANALISE',
      },
      {
        alergia: 'PENICILINA G',
        categoria: 'MEDICAMENTO',
        gravidade: 'EXTREMA',
        reacao: 'URTICARIA',
        statusVerificacao: 'CONFIRMADO',
      },
    ],
  });
  const classes = useStyles();

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
                  right: 81,
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
                <span className="title">FICHA DO CLIENTE</span>
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
                    MIRASSOL - SÃO PAULO
                  </span>
                </div>
                <div className="drawer-datasheet-body">
                  <span className="title-datasheet">ENDERECO: </span>
                  <span className="subtitle-datasheet">
                    RUA FLORES BELA, 2729, CENTRO
                  </span>
                </div>
                <div className="drawer-datasheet-body">
                  <span className="title-datasheet">ESTADO CIVIL: </span>
                  <span className="subtitle-datasheet">DIVORCIADO</span>
                </div>
              </div>
            </div>
            <div className="drawer-patient">
              <div className="drawer-header">
                <span className="title">ALERGIAS</span>
              </div>
            </div>

            <MaterialTable
              style={{ marginTop: 15 }}
              icons={{
                Check,
                DetailPanel: ChevronRight,
                Delete: DeleteOutline,
                Export: SaveAlt,
                Filter: FilterList,
                FirstPage,
                LastPage,
                NextPage: ChevronRight,
                PreviousPage: ChevronLeft,
                Search,
                ThirdStateCheck: Remove,
                Add,
                SortArrow: ArrowDownward,
                Clear: Add,
                Edit,
                ViewColumn,
              }}
              options={{
                search: false,
              }}
              title=""
              columns={state.columns}
              data={state.data}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setState((prevState) => {
                          const data = [...prevState.data];
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Patients;
