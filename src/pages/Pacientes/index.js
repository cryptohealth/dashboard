import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function Pacientes() {
  const [alergia, setAlergia] = useState('');
  const [telefoneUm, setTelefoneUm] = useState('');
  const [telefoneDois, setTelefoneDois] = useState('');
  const [celularUm, setCelularUm] = useState('');
  const [celularDois, setCelularDois] = useState('');

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Agnaldo Pereira da Silva</h1>
          <hr />
        </Grid>
        <Grid item xs={12}>
          <h2>Alergias</h2>
          <TextField
            id="Alergias"
            label=""
            multiline
            rowsMax={10}
            value={alergia}
            onChange={(event) => setAlergia(event.target.value)}
            variant="outlined"
            autoFocus
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <h2>Contatos</h2>
          <TextField
            id="TelefoneUm"
            label="Telefone 1 *"
            value={telefoneUm}
            onChange={(event) => setTelefoneUm(event.target.value)}
            variant="outlined"
            autoFocus
            style={{ marginRight: 10, marginBottom: 10 }}
          />
          <TextField
            id="TelefoneDois"
            label="Telefone 2 *"
            value={telefoneDois}
            onChange={(event) => setTelefoneDois(event.target.value)}
            variant="outlined"
            autoFocus
            style={{ marginRight: 10, marginBottom: 10 }}
          />
          <br />
          <TextField
            id="celularUm"
            label="Celular 1 *"
            value={celularUm}
            onChange={(event) => setCelularUm(event.target.value)}
            variant="outlined"
            autoFocus
            style={{ marginRight: 10, marginBottom: 10 }}
          />
          <TextField
            id="celularDois"
            label="Celular 2 *"
            value={celularDois}
            onChange={(event) => setCelularDois(event.target.value)}
            variant="outlined"
            autoFocus
            style={{ marginRight: 10, marginBottom: 10 }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Pacientes;
