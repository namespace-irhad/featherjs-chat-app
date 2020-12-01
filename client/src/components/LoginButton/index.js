import React, { useContext, useEffect } from 'react';
import { useFeathers } from 'figbird';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { Box } from '@material-ui/core';
import { UserContext } from '../../context/UserContext';
import { API_URL } from '../../API_URL.json';

const LoginButton = () => {
  const client = useFeathers();
  const { setUser, initialUser, setStatus } = useContext(UserContext);

  useEffect(() => {
    client.reAuthenticate().then((data) => {
      setStatus(true);
      setUser(data.user);
    }).catch((error) => {
      console.error('Authentication Failed: ', error);
      setStatus(false);
      setUser(initialUser);
    });
  }, [client, setUser]);

  return (
    <Box m={1}>
      <Button variant="contained" color="secondary" href={`${API_URL}/oauth/google`}>
        <PersonIcon />
        Google Login
      </Button>
    </Box>
  );
};

export default LoginButton;
