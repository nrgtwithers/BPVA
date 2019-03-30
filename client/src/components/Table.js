import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    textAlign: 'center',
  },
});

let id = 0;
function createData(name, location, service, product, notes) {
  id += 1;
  return { id, name, location, service, product, notes };
}

const rows = [
  createData('Vanessa Williams', 'Washington, DC', 6.0, 24, 4.0),
  createData('Sarah Wilson', 'Virginia Beach, VA', 9.0, 37, 4.3),
  createData('Maria Reyes', 'Baltimore, MD', 16.0, 24, 6.0),
  createData('Tara Rogers', 'Woodbridge, VA', 3.7, 67, 4.3),
  createData('Farah Seuiz', 'Fairfax, VA', 16.0, 49, 3.9),
];

function ClientTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Client Name</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">Service History</TableCell>
            <TableCell align="center">Product History</TableCell>
            <TableCell align="center">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.location}</TableCell>
              <TableCell align="center">{row.service}</TableCell>
              <TableCell align="center">{row.product}</TableCell>
              <TableCell align="center">{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

ClientTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientTable);
