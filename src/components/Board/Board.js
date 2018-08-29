import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import Note from "../Note";
import "./board.css";

export default class Board extends Component {
  static propTypes = {
    notes: PropTypes.array
  };

  clickHandler = () => {
    const note = {};

    this.props.actions.addNote(note);
  };

  render() {
    return (
      <Container className={"fullSize"} onDoubleClick={this.clickHandler}>
        {this.props.notes &&
          this.props.notes.map(note => <Note id={note.id} />)}
      </Container>
    );
  }
}
