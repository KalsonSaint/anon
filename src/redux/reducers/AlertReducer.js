import Actions from "../actions/actionTypes";

const AlertReducer = (state = {}, action) => {
  switch (action.type) {
    case Actions.ALERT_SUCCESS:
      return {
        type: "success",
        message: action.message,
      };
    case Actions.ALERT_ERROR:
      return {
        type: "error",
        message: action.message,
      };
    case Actions.ALERT_INFO:
      return {
        type: "info",
        message: action.message,
      };
    case Actions.ALERT_WARNING:
      return {
        type: "warning",
        message: action.message,
      };
    case Actions.ALERT_CLEAR:
      return {};
    default:
      return {};
  }
};

export default AlertReducer;
