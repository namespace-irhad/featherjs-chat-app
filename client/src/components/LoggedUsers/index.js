import {
  Avatar, Box, List, ListItem, Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import client from '../../feathersClient';

const styles = {
  onlineBox: {
    marginTop: '20px',
    alignSelf: 'stretch',
    minWidth: '110px',
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: '#bbbbbb',
    paddingLeft: '5px',
  },
};

const LoggedUsers = ({ classes }) => {
  const [logged, setLogged] = useState({});

  const onLoggedIn = (payload) => {
    if (logged[payload.userId] === undefined) {
      setLogged((prev) => ({
        ...prev,
        [payload.user.id]: { image: payload.user.picture, name: payload.user.name },
      }));
    }
  };

  useEffect(() => {
    client.service('messages').on('created', onLoggedIn);
    return () => client.removeListener('created', onLoggedIn);
  }, []);

  return (

    <Box className={classes.onlineBox}>
      <Typography variant="h6">Online:</Typography>
      <Box>
        <List>
          {Object.keys(logged).map((user, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={index} className={classes.userBox}>
              <Avatar alt={logged[user].name} src={logged[user].image} />
              <Typography className={classes.username} variant="subtitle2">{logged[user].name}</Typography>
            </ListItem>
          ))}

        </List>
      </Box>
    </Box>
  );
};

LoggedUsers.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoggedUsers);
