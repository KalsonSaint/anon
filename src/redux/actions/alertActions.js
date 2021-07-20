import Actions from './actionTypes';

export const alertActions = {
    success,
    error,
    info,
    warning,
    clear,
};

/**
 *
 * @param {*} message
 */
function success(message) {
    return { type: Actions.ALERT_SUCCESS, message };
}

/**
 *
 * @param {*} message
 */
function error(message) {
    return { type: Actions.ALERT_ERROR, message };
}

/**
 *
 * @param {*} message
 */
function info(message) {
    return { type: Actions.ALERT_INFO, message };
}

/**
 *
 * @param {*} message
 */
function warning(message) {
    return { type: Actions.ALERT_WARNING, message };
}

/**
 *
 * @param {*} message
 */
function clear() {
    return { type: Actions.ALERT_CLEAR };
}
