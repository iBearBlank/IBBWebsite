import React from 'react';
import Note from '../components/Note';

export default class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesClicked: 0 };

    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
  }

  render() {
    return (
      <Note
        timesClicked={this.state.timesClicked}
        updateNumber={this.clicked}
      />
    );
  }
}
