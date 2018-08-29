import React, { Component } from "react";
import Draggable from "react-draggable";
import "./note.css";

export default class Note extends Component {
  render() {
    return (
      <Draggable
        key={this.props.id}
        axis="both"
        handle=".note"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div className="note" />
      </Draggable>
    );
  }
}
