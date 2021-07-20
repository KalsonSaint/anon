import { combineReducers } from "redux";
import AlertReducer from "./AlertReducer";

/**
 * Reducers
 * stateName: ReducerFile
 */

export default combineReducers({
  alert: AlertReducer,
});
