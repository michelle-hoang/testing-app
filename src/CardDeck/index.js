import React from 'react';
import LemonCard from '../Card';
import { styles } from './styles';
import { withStyles } from '@material-ui/core';

class CardDeck extends React.Component {
  render() {
    const { classes } = this.props;
    const videoTypes = [
      { name: 'Doc Style', startingCost: '$2000', description: 'Lorem ipsum' },
      { name: 'Lifestyle', startingCost: '$2000', description: 'Lorem ipsum' },
      { name: 'Animation', startingCost: '$2000', description: 'Lorem ipsum' },
      { name: 'Curated', startingCost: '$2000', description: 'Lorem ipsum' },
    ];
    return (
      <div className={classes.deck}>
        {videoTypes.map(type => {
          return <LemonCard name={type.name} />;
        })}
      </div>
    );
  }
}

export default withStyles(styles)(CardDeck);
