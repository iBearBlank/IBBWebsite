import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  height: 100,
  width: 100,
};

const font = {
  fontFamily: 'Roboto',
};


export default function Note(props) {
  return (
    <div>
      <div className="row center-xs">
        <Paper className="row center-xs" style={style}>
          <h1 className="row middle-xs" style={font}>{props.timesClicked}</h1>
        </Paper>
      </div>
      <div className="row center-xs">
        <RaisedButton
          label="Click me"
          secondary
          type="submit"
          onClick={props.updateNumber}
        />
      </div>
    </div>
  );
}
