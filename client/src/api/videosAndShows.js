import axios from 'axios';
import { API_URL } from '../constants';
import { handleAsyncError } from '../Utils/handleAsyncError';
import { getFromLocalStorage } from '../Utils/Storage';

export const getAllVideos = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/videos`);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    handleAsyncError(error);
  }
};

export const getOneVideo = async videoId => {
  try {
    const { data } = await axios.get(`${API_URL}/videos/${videoId}`);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    handleAsyncError(error);
  }
};

export const hasAccessToVideo = async videoId => {
  try {
    const reqBody = {};
    const config = {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('token')}`,
      },
    };

    const { data } = await axios.post(`${API_URL}/videos/has-access-to-video/${videoId}`, reqBody, config);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    handleAsyncError(error);
  }
};

export const accessVideo = async videoId => {
  try {
    const reqBody = {};
    const config = {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('token')}`,
      },
    };

    const { data } = await axios.post(`${API_URL}/videos/access-video/${videoId}`, reqBody, config);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    handleAsyncError(error);
  }
};

export const getAllShows = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/shows`);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    handleAsyncError(error);
  }
};
