import React, { PropTypes } from 'react';
import Radium from 'radium';
import '../grid.styl'; 
import color from 'color';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

// Material UI with Radium attached -- Not Working Anymore
// const Paper =Radium(require('material-ui/Paper'));
// const RaisedButton = Radium(require('material-ui/RaisedButton'));

const styles = {
  button: {
    color: color('#0074d9').lighten(0.2).hexString(),
  },

  paper: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    top: '100%',
    width: 100,
    ':hover': {
      backgroundColor: '#0074d9',
    },
  },

  font: {
    fontFamily: 'Roboto',
  },
};

function Note(props) {
  return (
    <div>
      <div>
        <Paper className="counter" style={styles.paper}>
          <h1 style={styles.font}>{props.timesClicked}</h1>
        </Paper>
      </div>
        <div className="buttons">
          <RaisedButton
            className="hello"
            style={styles.button}
            label="+"
            secondary
            type="submit"
            onClick={props.incNumber}
          />
          <RaisedButton
            style={styles.button}
            label="-"
            secondary
            type="submit"
            onClick={props.decNumber}
          />
        </div>
      <section>
        <aside>sidebar</aside>
        <article>content</article>
      </section>
    </div>
  );
}

module.exports = Radium(Note);

Note.propTypes = {
  timesClicked: PropTypes.number.isRequired,
  incNumber: PropTypes.func.isRequired,
  decNumber: PropTypes.func.isRequired,
};
