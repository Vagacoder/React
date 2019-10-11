import React from 'react';
import { makeStyles, withStyles, createStyles } from '@material-ui/styles';

const Nested = withStyles({
  root: {}, // a style rule
  label: {}, // a nested style rule
})(({ classes }: any) => (
  <div>
    <h4>Nested, using withStyles()</h4>
    <button className={classes.root}>
      <span className={classes.label}>
        Nested `${classes.label}`
      </span>
    </button>
  </div>
));

export default Nested;