import { connect } from "react-redux";
import Board from "./Board";
import { bindActionCreators } from "redux";
import { addNote } from "../../actions/board";

const mapStateToProps = ({ board }) => ({
  notes: board.notes,
  selectedNotes: board.selectedNotes
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addNote }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
