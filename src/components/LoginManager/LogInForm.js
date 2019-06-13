import React from 'react'
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {theme} from "../../utils/theme";
import * as ROUTES from '../../utils/constants.routes'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  TextField: {

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = ({user, onChangeValue, onSubmit}) => {
  const classes = useStyles(theme);

  return  <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Ingresar
      </Typography>
      <form className={classes.form} noValidate onSubmit={onSubmit}>
        <TextField
          onChange={onChangeValue}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Tu mail"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          onChange={onChangeValue}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Ingresar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Perdí la password :'(
            </Link>
          </Grid>
          <Grid item>
            <Link href={ROUTES.SIGNUP} variant="body2">
              No tengo cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
};

export default LoginForm
