import React from 'react';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Radio,
} from '@material-ui/core';

const LemonCardComponent = props => {
  const { classes, type, name } = props;
  if (type === 'vertical') {
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt="img"
            image="/fine.jpg"
            title="Example"
          />
          <CardContent>
            <p>{name}</p>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
};

export default withStyles(styles)(LemonCardComponent);
