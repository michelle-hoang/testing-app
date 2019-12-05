import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Link to="/table" className={classes.link}>
            Table
          </Link>
          <Link to="/card-deck" className={classes.link}>
            Card Deck
          </Link>
          <Link to="/lightbox" className={classes.link}>
            Lightbox
          </Link>
          <Link to="/formcontrol" className={classes.link}>
            FormControl
          </Link>
          <Link to="/picker" className={classes.link}>
            Picker
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
