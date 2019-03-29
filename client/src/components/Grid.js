import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import headshot from '../components/headshot.jpg';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: '20px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="standard-name"
                                label="Name"
                                className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Location"
                                className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Profession"
                                className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Website"
                                className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Facebook"
                                className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Instagram"
                                className={classes.textField}
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-name"
                                label="Services Offered"
                                className={classes.textField}
                                style={{ margin: 8 }}
                                multiline
                                rowsMax="4"
                                // value={this.state.name}
                                // onChange={this.handleChange('name')}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                  }}
                            />
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} style={{ background: 'transparent', boxShadow: 'none' }}>
                    <img src={headshot} width="350" height="300" alt="headshot" />
                    </Paper>
                </Grid>
                {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
