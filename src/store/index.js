import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import thunkMiddleware from "redux-thunk";

const middlewares = [thunkMiddleware];
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunkMiddleware),
    composeEnhancers
  )
);
