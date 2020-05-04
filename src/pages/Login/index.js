import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import cover from '~/assets/images/login-cover.jpg';
import { Screen, Input, Button } from '~/components';

import { Container, ForgotPassword } from './styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function Login() {
  const { margin } = useStyles();

  return (
    <Screen image={cover} filter="rgba(255, 255, 255, 0.8)">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <div className={margin}>
              <b>Olá, </b>
              acesse sua conta
            </div>
            <div>
              <Input className={margin} label="CPF" />
              <Input className={margin} label="Senha" type="password" />
              <Button className={margin}>Entrar</Button>
            </div>
            <div className={margin}>
              <ForgotPassword>
                Esqueceu sua senha? <b>Clique aqui.</b>
              </ForgotPassword>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Screen>
  );
}
