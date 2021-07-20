export const getErrorMessage = (errObj) => {
    const errResponse = errObj.response || null;
    // 'Something went Wrong Please try again'
    const message =
        "Your request couldn't be processed, We have notified the technical team about it";
    const errorMessage =
        errResponse === null
            ? message
            : errResponse &&
              errResponse.data &&
              errResponse.data.message &&
              errResponse.data.message.message
            ? errResponse.data.message.message
            : errResponse.data.message
            ? errResponse.data.message
            : message;
    return errorMessage;
};
