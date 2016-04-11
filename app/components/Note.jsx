import React from 'react';
import Paper from 'material-ui/lib/paper';

const style = {
  height: 200,
  width: 200,
};

const font = {
  fontFamily: 'Roboto',
};

export default () =>
<div className="row center-xs">
  <Paper className="row center-xs" style={style}>
    <h2 className="row middle-xs" style={font}>React Starter</h2>
  </Paper>
</div>;
