import React, { PropTypes } from 'react';
import Note from '../components/Note';
import { incNumber, decNumber } from '../actions/noteActions';
import { connect } from 'react-redux';

function NoteContainer(props) {
  return (
    <Note
      timesClicked={props.notes}
      incNumber={props.increment}
      decNumber={props.decrement}
    />
  );
}

function mapStateToProps(store) {
  return {
    notes: store.noteState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    decrement() {
      dispatch(decNumber());
    },
    increment() {
      dispatch(incNumber());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteContainer);

NoteContainer.propTypes = {
  notes: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};
