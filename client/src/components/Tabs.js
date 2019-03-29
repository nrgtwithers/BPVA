import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Client from '@material-ui/icons/Account';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PersonPinIcon from '@material-ui/icons/PersonPin';
// import HelpIcon from '@material-ui/icons/Help';
// import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
// import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '20px',
    },
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'yes', }}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Client Information" icon={<Icon>face</Icon>} />
            <Tab label="Calendar" icon={<Icon>calendar_today</Icon>} />
            <Tab label="Messages" icon={<Icon>message</Icon>} />
            <Tab label="Consultation Form" icon={<Icon>assignment</Icon>} />
            <Tab label="Point of Sale" icon={<Icon>store</Icon>} />
            <Tab label="Rating" icon={<ThumbUp />} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Client Information</TabContainer>}
        {value === 1 && <TabContainer>Calendar</TabContainer>}
        {value === 2 && <TabContainer>Messages</TabContainer>}
        {value === 3 && <TabContainer>Consultation Form</TabContainer>}
        {value === 4 && <TabContainer>Point of Sale</TabContainer>}
        {value === 5 && <TabContainer>Rating</TabContainer>} 
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);