import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({

  root: {
    width: '75%',
  },
  ExpPanel: {
    backgroundImage: 'linear-gradient(to left,#494E6B , #192231)',
    boxShadow: '1px 1px 10px black'
  },
  ExpPanelSum: {
    color: 'white',
  },
  ExpTitle: {
    color: 'white',
    fontSize: '1.2em',
    textShadow: '3px 3px 5px black'
  },
  ExpSubTitle: {
    color: 'white',
    borderTop: '1px solid white',
    paddingTop: 25,
    // backgroundColor: '#00000020',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 15,
    // borderRadius: 5
  }

});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.ExpPanel}>
        <ExpansionPanelSummary className={classes.ExpPanelSum} expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.ExpTitle}>What do we do?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.ExpSubTitle}>
            We provide daily support for stylists and clients looking to organize/schedules appointments and consultations, as well as provide a messaging and point of sales system.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.ExpPanel}>
        <ExpansionPanelSummary className={classes.ExpPanelSum} expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.ExpTitle}>Our Goals</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.ExpSubTitle}>
            To provide multiple services for both stylists and their clients. Allowing for a more personalized customer experience
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleExpansionPanel);
