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
    return [false, handleAsyncError(error)];
  }
};

export const getOneVideo = async videoId => {
  try {
    const { data } = await axios.get(`${API_URL}/videos/${videoId}`);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    return [false, handleAsyncError(error)];
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
    return [false, handleAsyncError(error)];
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
    return [false, handleAsyncError(error)];
  }
};

export const getAllShows = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/shows`);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};

export const getUnlockedVideos = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('token')}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/user/videos`, config);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};

export const getBookedShows = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('token')}`,
      },
    };

    const { data } = await axios.get(`${API_URL}/user/shows`, config);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};

export const createShow = async formData => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('token')}`,
      },
    };

    const { data } = await axios.post(`${API_URL}/shows`, formData, config);
    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};

export const uploadVideo = async formData => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('token')}`,
      },
    };

    const { data } = await axios.post(`${API_URL}/videos`, formData, config);
    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};

export const getOneShow = async showId => {
  try {
    const { data } = await axios.get(`${API_URL}/shows/${showId}`);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};

export const bookShow = async showId => {
  try {
    const reqBody = {};
    const config = {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('token')}`,
      },
    };
    const { data } = await axios.post(`${API_URL}/shows/${showId}/book-ticket`, reqBody, config);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};
