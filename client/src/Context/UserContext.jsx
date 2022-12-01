import { useState, useContext, createContext, useEffect } from 'react';
import { getUser, isLoggedIn } from '../api/auth';
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

  const getUserDetails = async () => {
    if (!user) return;
    const data = await getUser(user._id);

    if (Array.isArray(data) && data[0] === false) {
      alert(data[1]);
      return;
    }

    setUser(data.user);
  };

  const refreshData = () => {
    setUser(JSON.parse(getFromLocalStorage('user')));
    setToken(getFromLocalStorage('token'));
    getUserDetails();
  };

  useEffect(() => {
    getUserDetails();
  }, []);

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
