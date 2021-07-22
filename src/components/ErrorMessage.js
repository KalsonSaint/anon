export const getErrorMessage = (errObj) => {
  const errResponse = errObj.response || null;
  const errorMessage =
    errResponse === null
      ? "Something went Wrong Please try again."
      : errResponse &&
        errResponse.data &&
        errResponse.data.error &&
        errResponse.data.error.error
      ? errResponse.data.error.error
      : errResponse.data.error
      ? errResponse.data.error
      : "Something went Wrong Please try again";
  return errorMessage;
};
