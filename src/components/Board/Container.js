import { connect } from "react-redux";
import Board from "./Board";
import { bindActionCreators } from "redux";
import { addNote } from "../../actions/notes";

const mapStateToProps = ({ note }) => ({
  notes: note.notes
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addNote }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
