import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
// import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const styles = theme => ({
  main: {
    color: 'white ',
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#7b7675 ',
    color: 'white ',
    // opacity: '0.7',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    // opacity: '0.7',
    margin: theme.spacing.unit,
    backgroundColor: '#192231'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    color: 'white ',
    // opacity: '0.7',
    marginTop: theme.spacing.unit,
  },
  submit: {
    // opacity: '0.9',
    backgroundColor: '#192231',
    marginTop: theme.spacing.unit * 3,
  },
  InputLabel: {
    color: 'white',
    fontFamily: 'Open Sans Condensed',
}
});

function Form(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper} style={{ background: 'transparent', boxShadow: 'none' }}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} style={{ background: 'transparent', boxShadow: 'none' }}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email" className={classes.InputLabel}>Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password" className={classes.InputLabel}>Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <FormControlLabel control={<Switch value="checkedC" />} label="Remember me" />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
      <p class="signup">Don't have an account? <Link component={RouterLink} to="/signup">Sign up.</Link></p>
    </main>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);