import React, { Component } from "react";
import Draggable from "react-draggable";
import classnames from "classnames";
import "./note.css";

export default class Note extends Component {
  state = {
    isDragging: false
  };
  clickHandler = (e, id) => {
    console.log("clickhandler:", this.state.isDragging);
    console.log("click");
    //Usar classnames para meterle una clase durante el click y que se seleccione
    this.props.actions.selectNote(id);
  };
  doubleClickHandler = e => {
    e.stopPropagation();

    console.log("dblclick");
  };

  render() {
    const { text, selected } = this.props;
    const classNames = classnames("note", {
      selected: selected
    });
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
        <div
          className={classNames}
          onDoubleClick={this.doubleClickHandler}
          onClick={e => this.clickHandler(e, this.props.id)}
        >
          {text}
        </div>
      </Draggable>
    );
  }
}
