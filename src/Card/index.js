import React from 'react';
import LemonCardComponent from './component';

class LemonCard extends React.Component {
  render() {
    const { name } = this.props;
    return <LemonCardComponent name={name} type={'vertical'} />;
  }
}

export default LemonCard;
