import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import Note from "../Note";
import { contains } from "ramda";

import "./board.css";

export default class Board extends Component {
  static propTypes = {
    notes: PropTypes.array,
    selectedNotes: PropTypes.array
  };

  doubleClickHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    const note = { text: "" };

    this.props.actions.addNote(note);
  };

  render() {
    return (
      <Container className={"fullSize"} onDoubleClick={this.doubleClickHandler}>
        {this.props.notes &&
          this.props.notes.map(note => (
            <Note
              id={note.id}
              text={note.text}
              selected={contains(note.id, this.props.selectedNotes)}
            />
          ))}
      </Container>
    );
  }
}
