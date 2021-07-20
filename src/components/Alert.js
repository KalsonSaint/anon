import Swal from "sweetalert2";
import { getErrorMessage } from "./ErrorMessage";

export const triggerLoadingAlert = (isLoading, message, description) => {
  isLoading
    ? Swal.fire({
        title: message || "Processing... Please wait",
        text: description,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        showDenyButton: false,
        showCancelButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      })
    : Swal.close();
};

export const triggerError = (error) => {
  const message = getErrorMessage(error);
  Swal.fire({
    icon: "error",
    title: message,
    timer: 4000,
  });
};

export const triggerSuccess = (message, timer, width) => {
  Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: timer || 1500,
    width: width || "32rem",
  });
};
