import React, { useContext } from 'react';
import { Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import { UserContext } from '../../context/UserContext';
import ChatBox from '../ChatBox';
import LoggedUsers from '../LoggedUsers';

const materialStyles = {
  chatboxContainer: {
    minWidth: '600px',
    paddingBottom: '20px',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      minWidth: '80%',
    },
  },
  loggedUsersContainer: {
    alignSelf: 'stretch',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      display: 'none',
    },
  },
};

const HeroSpace = ({ classes }) => {
  const { user, status } = useContext(UserContext);

  return (
    <section className={styles['hero-container']}>
      <Typography variant="h4" className={styles['hero-title']}>🍃FeathersJS Chat Application</Typography>
      {status && (
        <>
          <Typography variant="subtitle1" className={styles['user-wrapper']}>
            Signed in as:
            {' '}
            <Box component="span">{user.name}</Box>
          </Typography>
          <LogoutButton />
        </>
      )}
      {status ? (
        <Box display="flex" flexDirection="row" minWidth="100%" alignItems="center" justifyContent="center">
          <Box className={classes.loggedUsersContainer}>
            <LoggedUsers />
          </Box>
          <Box className={classes.chatboxContainer}>
            <ChatBox />
          </Box>
        </Box>
      )
        : (
          <Box className={styles['login-wrapper']}>
            <Typography variant="h6" className={styles['user-wrapper']}>
              Login to chat
            </Typography>
            <LoginButton />
          </Box>
        )}
    </section>
  );
};

HeroSpace.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(materialStyles)(HeroSpace);
