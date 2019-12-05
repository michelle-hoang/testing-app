import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles';

const LemonTableHeader = props => {
  const { classes, title, columns } = props;
  return (
    <TableHead>
      <TableRow className={classes.tableHeader}>
        <TableCell className={classes.tableName}>{title}</TableCell>
      </TableRow>
      <TableRow>
        {columns.map(column => {
          return (
            <TableCell id={columns.indexOf(column)} className={classes.columns}>
              {column}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default withStyles(styles)(LemonTableHeader);
