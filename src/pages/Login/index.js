import React from 'react';
import { useHistory } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import cover from '~/assets/images/login-cover.jpg';
import logo from '~/assets/images/logo.png';
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

  const history = useHistory();

  return (
    <Screen image={cover} filter="rgba(255, 255, 255, 0.8)">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={9} xl={9} className="centralize">
            <img src={logo} className="img" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className={margin}>
              <b>Olá, </b>acesse sua conta
            </div>
            <div>
              <Input className={margin} label="CPF" />
              <Input className={margin} label="Senha" type="password" />
              <Button
                type="button"
                className={margin}
                onClick={() => history.push('/patients')}
              >
                Entrar
              </Button>
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
