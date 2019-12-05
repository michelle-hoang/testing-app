import React from 'react';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles';
import { Switch, Route } from 'react-router-dom';
import Table from '../Table';
import CardDeck from '../CardDeck';

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.sideBar}>
          <h3>Sidebar</h3>
        </div>
        <div className={classes.content}>
          <Switch>
            <Route exact path="/table" component={Table} />
            <Route exact path="/card-deck" component={CardDeck} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
