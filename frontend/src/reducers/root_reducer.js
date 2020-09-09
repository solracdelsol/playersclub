import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import sports from "./sports_reducer";
import articles from './articles_reducer';
import ui from "./ui_reducer";

const RootReducer = combineReducers({
  session,
  articles,
  sports,
  errors,
  ui,
});

export default RootReducer;
