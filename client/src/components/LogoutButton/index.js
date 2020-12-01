import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { useFeathers } from 'figbird';
import { UserContext } from '../../context/UserContext';

const LogoutButton = () => {
  const client = useFeathers();
  const { setUser, initialUser } = useContext(UserContext);
  const logoutUser = async () => {
    setUser(initialUser);
    client.logout();

    return setTimeout(() => { window.location.href = '/'; }, 500);
  };

  return (
    <Button variant="contained" color="primary" onClick={logoutUser}>
      Logout
    </Button>
  );
};

export default LogoutButton;
