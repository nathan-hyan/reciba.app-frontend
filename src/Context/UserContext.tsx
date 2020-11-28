import React, { createContext, useState } from 'react';
import Axios from 'axios';
import { notify } from 'react-notify-toast';
import { useHistory } from 'react-router-dom';
import { endpoints } from '../constants/endpoint';

type ContextProps = {
  isLoggedIn: boolean;
  level: number;
  token: string;
  name: string;
  setUserData: any;
};

export const UserContext = createContext<Partial<ContextProps>>({});

const UserContextProvider = (props: { children: React.ReactNode }) => {
  const history = useHistory();
  const storedToken = localStorage.getItem('bill-token');
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    level: 9,
    token: '',
    name: ''
  });

  if (storedToken && !userData.isLoggedIn) {
    Axios.post(
      endpoints.backend + 'api/user/loggedInUser',
      { storedToken },
      { headers: { auth: localStorage.getItem('bill-token') } }
    )
      .then((response) => {
        localStorage.setItem('bill-token', response.data.data.token);
        setUserData({
          isLoggedIn: true,
          level: 9,
          token: response.data.data.token,
          name: response.data.data.name
        });
      })
      .catch((err) => {
        localStorage.removeItem('bill-token');
        const ERROR = err.response ? err.response.data.message : err.message;
        notify.show(ERROR, 'error');
        setUserData({
          isLoggedIn: false,
          level: 9,
          token: '',
          name: ''
        });
        history.push('/');
      });
  }

  return (
    <UserContext.Provider value={{ ...userData, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
