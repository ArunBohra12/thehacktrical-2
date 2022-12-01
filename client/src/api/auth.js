import axios from 'axios';
import { API_URL } from '../constants';
import { handleAsyncError } from '../Utils/handleAsyncError';
import { getFromLocalStorage } from '../Utils/Storage';

export const login = async loginData => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, loginData);

    if (data.status === 'success') {
      return data;
    }

    return [false, 'Something went wrong! Please try again.'];
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};

export const register = async signupData => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/signup`, signupData);

    if (data.status === 'success') {
      return data;
    }

    return [false, 'Something went wrong! Please try again.'];
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};

export const isLoggedIn = () => {
  const user = getFromLocalStorage('user');
  const token = getFromLocalStorage('token');

  if (!user || !token) return false;

  return true;
};

export const updateOrgInfo = async formData => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('token')}`,
      },
    };

    const { _id: orgId } = JSON.parse(getFromLocalStorage('user'));

    const { data } = await axios.patch(`${API_URL}/auth/${orgId}/orginfo`, formData, config);

    if (data.status !== 'success') return [false, 'Sorry, something went wrong! Please try again'];

    return data;
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};

export const getUser = async userId => {
  try {
    const { data } = await axios.get(`${API_URL}/auth/${userId}`);

    if (data.status === 'success') return data;

    return [false, 'Sorry, something went wrong! Please try again'];
  } catch (error) {
    return [false, handleAsyncError(error)];
  }
};
