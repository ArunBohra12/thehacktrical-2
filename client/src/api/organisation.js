import axios from 'axios';
import { API_URL } from '../constants';
import { handleAsyncError } from '../Utils/handleAsyncError';

export const getAllShows = async orgId => {
  try {
    const { data } = await axios.get(`${API_URL}/shows/org/${orgId}`);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    handleAsyncError(error);
  }
};

export const getAllVideos = async orgId => {
  try {
    const { data } = await axios.get(`${API_URL}/videos/org/${orgId}`);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    handleAsyncError(error);
  }
};
