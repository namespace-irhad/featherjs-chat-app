import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const initialValue = null;

export const UserContext = createContext(initialValue);

export const UserProvider = ({ children }) => {
  const initialUser = { user: null };
  const [data, setData] = useState(initialUser);
  const [status, setStatus] = useState(false);

  return (
    <UserContext.Provider value={{
      user: data, setUser: setData, initialUser, status, setStatus,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
