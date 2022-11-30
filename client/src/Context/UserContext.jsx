import { useState, useContext, createContext } from 'react';
import { isLoggedIn } from '../api/auth';
import { getFromLocalStorage } from '../Utils/Storage';

const Context = createContext({
  user: null,
  setCurrentUser: () => null,
  token: null,
  setToken: () => null,
  isLoggedIn: false,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(getFromLocalStorage('user')));
  const [token, setToken] = useState(getFromLocalStorage('token'));

  const refreshData = () => {
    setUser(JSON.parse(getFromLocalStorage('user')));
    setToken(getFromLocalStorage('token'));
  };

  const value = {
    user,
    token,
    isLoggedIn: isLoggedIn(),
    refreshData,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const UserContext = () => useContext(Context);

export default UserContext;
