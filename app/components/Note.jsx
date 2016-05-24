import React, { PropTypes } from 'react';
import Radium from 'radium';
import color from 'color';

// Material UI with Radium attached
const Paper = Radium(require('material-ui/lib/paper'));
const RaisedButton = Radium(require('material-ui/lib/raised-button'));

const styles = {
  button: {
    color: color('#0074d9').lighten(0.2).hexString(),
  },

  paper: {
    height: 100,
    width: 100,
    bottom: 15,
    backgroundColor: '#0074d9',
    ':hover': {
      backgroundColor: '#dba4a4',
    },
  },

  font: {
    fontFamily: 'Roboto',
  },
};

function Note(props) {
  return (
    <div>
      <div className="row center-xs">
        <Paper className="row center-xs" style={styles.paper}>
          <h1 className="row middle-xs" style={styles.font}>{props.timesClicked}</h1>
        </Paper>
      </div>
      <div className="row center-xs">
        <RaisedButton
          style={styles.button}
          label="Add"
          secondary
          type="submit"
          onClick={props.incNumber}
        />
      </div>
      <div className="row center-xs">
        <RaisedButton
          style={styles.button}
          label="Sub"
          secondary
          type="submit"
          onClick={props.decNumber}
        />
      </div>
    </div>
  );
}

module.exports = Radium(Note);

Note.propTypes = {
  timesClicked: PropTypes.number.isRequired,
  incNumber: PropTypes.func.isRequired,
  decNumber: PropTypes.func.isRequired,
};
