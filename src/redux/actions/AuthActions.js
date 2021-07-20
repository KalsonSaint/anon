import axios from "../../axios/axios";

export const signInApi = async (payload) => {
  try {
    const url = "/users/signin";
    const response = await axios.post(url, payload);
    return response.data;
  } catch (err) {
    throw err;
  }
};
