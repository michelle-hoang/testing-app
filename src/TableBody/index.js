import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles';

export const LemonTableBody = props => {
  const { projects, classes } = props;

  return (
    <TableBody className={classes.body}>
      {projects.map(project => {
        return (
          <TableRow key={projects.indexOf(project)}>
            <TableCell id="name">{project.name}</TableCell>
            <TableCell id="status">{project.status}</TableCell>
            <TableCell id="date">{project.date}</TableCell>
            <TableCell id="lastUpdate">{project.lastUpdate}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default withStyles(styles)(LemonTableBody);
