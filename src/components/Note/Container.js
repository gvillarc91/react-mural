import { connect } from "react-redux";
import Note from "./Note";
import { selectNote } from "../../actions/notes";
import { bindActionCreators } from "redux";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ selectNote }, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Note);
