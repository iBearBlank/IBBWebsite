import React from 'react';
import Note from '../components/Note';

class NoteContainer extends React.Component {
  state = { timesClicked: 0 };
  inc = () => this.setState({ timesClicked: this.state.timesClicked + 1 });
  dec = () => this.setState({ timesClicked: this.state.timesClicked - 1 });


  render() {
    return (
      <Note
        timesClicked={this.state.timesClicked}
        incNumber={this.inc}
        decNumber={this.dec}
      />
    );
  }
}

module.exports = NoteContainer;
