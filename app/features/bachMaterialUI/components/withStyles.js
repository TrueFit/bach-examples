import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

const WithStyles = ({classes, fontSize, increase}) => (
  <div className={classes.container}>
    <h1 className={classes.h1}>withStyles</h1>
    <h2 className={classes.h2}>Font Size: {fontSize}</h2>
    <button className={classes.button} onClick={increase}>
      ^ Increase ^
    </button>
  </div>
);

export default compose(
  withState('fontSize', 'setFontSize', 12),
  withCallback('increase', ({fontSize, setFontSize}) => () => {
    setFontSize(fontSize + 1);
  }),
  withStyles(theme => ({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexDirection: 'column',
    },
    h1: {
      color: theme.palette.primary.main,
    },
    h2: {
      color: theme.palette.secondary.main,
      fontSize: ({fontSize}) => fontSize,
    },
    button: {
      height: 50,
      width: 100,
      borderRadius: 8,
    },
  })),
)(WithStyles);
