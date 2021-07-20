import axios from "../../axios/axios";

export const getAllUsersApi = async () => {
  try {
    const url = "/users";
    const response = await axios.get();
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getAllPostApi = async () => {
  try {
    const url = "/posts";
    const response = await axios.get();
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getNonVerifiedPostsApi = async () => {
  try {
    const url = "/posts-nonverified";
    const response = await axios.get();
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const addPostApi = async (payload) => {
  try {
    const url = "/post";
    const response = await axios.post(url, payload);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const likePostApi = async () => {
  try {
    const url = "/like-post";
    const response = await axios.patch();
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const deletePostApi = async () => {
  try {
    const url = "/post";
    const response = await axios.delete(url);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const postCommentApi = async (payload) => {
  try {
    const url = "/comment";
    const response = await axios.post(url, payload);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getCommentApi = async () => {
  try {
    const url = "/comment";
    const response = await axios.get();
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const deleteCommentApi = async (payload) => {
  try {
    const url = "/comment";
    const response = await axios.delete(url, payload);
    return response.data;
  } catch (err) {
    throw err;
  }
};
