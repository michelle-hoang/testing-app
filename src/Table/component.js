import React from 'react';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles';
import { Container, Table } from '@material-ui/core';
import LemonTableHeader from '../TableHeader';

import LemonTableBody from '../TableBody';

const TableComponent = props => {
  const { classes } = props;
  const columns = [
    'Project Name',
    'Project Status',
    'Production Date',
    'Last Update',
  ];
  const projects = [
    {
      name: 'First Project',
      status: 'Status Message 1',
      date: 'January 1, 2020',
      lastUpdate: 'October 1, 2019 at 1:00PM',
    },
    {
      name: 'Second Project',
      status: 'Status Message 2',
      date: 'January 2, 2020',
      lastUpdate: 'November 1, 2019 at 1:00PM',
    },
    {
      name: 'Third Project',
      status: 'Status Message 3',
      date: 'January 3, 2020',
      lastUpdate: 'December 1,2019 at 1:00PM',
    },
  ];

  return (
    <Container className={classes.container}>
      <Table className={classes.table}>
        <LemonTableHeader title={'My Projects'} columns={columns} />
        <LemonTableBody projects={projects} />
      </Table>
    </Container>
  );
};

export default withStyles(styles)(TableComponent);
