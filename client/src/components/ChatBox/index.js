import {
  Card, CardContent, Container, Box, TextField, FormControl, IconButton,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import scrollIntoView from 'scroll-into-view-if-needed';
import SendIcon from '@material-ui/icons/Send';
import client from '../../feathersClient';
import Message from '../Message';

const styles = {
  root: {
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    color: '#bbbbbb',
  },
  textfield: {
    flex: '1',
    width: '100%',
    margin: '10px',

    '& .MuiInputBase-input': {
      color: '#fff', // Text color
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#fff8', // Semi-transparent underline
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#0d7377', // Solid underline on hover
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0d7377', // Solid underline on focus
    },
  },
  feedBox: {
    flex: 1,
    height: '100%',
    maxHeight: '500px',
    minWidth: '100%',
  },
  messages: {
    color: '#bbbbbb',
  },
  formContainer: {
    marginTop: '20px',
  },
  boxScroll: {
    '& > div': {
      overflowX: 'hidden !important',
    },
  },
};

const ChatBox = (props) => {
  const { classes } = props;
  const [message, setMessage] = useState('');
  const [msgFeed, setMsgFeed] = useState([]);
  const [refNode, setNode] = useState(null);

  const chatEnd = useCallback((node) => {
    if (node !== null) {
      setNode(node);
    }
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    client.service('messages').create({
      text: message,
    });
    setMessage('');
  };

  useEffect(() => {
    (async () => {
      if (msgFeed.length === 0) {
        const messages = await client.service('messages').find({
          query: {
            $sort: { createdAt: -1 },
            $limit: 20,
          },
        });
        setMsgFeed(messages.data.reverse());
        if (refNode) { scrollIntoView(refNode, { behavior: 'smooth' }); }
      }
    })();
    client.service('messages').on('created', (msg) => {
      setMsgFeed((prev) => [...prev, msg]);
    });
  }, []);

  useEffect(() => {
    if (refNode) { scrollIntoView(refNode, { behavior: 'smooth' }); }
  }, [msgFeed]);

  return (
    <Container maxWidth="md" className="chatbox-wrapper">
      <Card variant="outlined">
        <CardContent className="chatbox">
          <Box className={classes.feedBox}>
            <Scrollbars className={classes.boxScroll} autoHide style={{ height: 500 }}>
              {msgFeed.map((msg) => (
                <Message
                  key={msg.id}
                  picture={msg.user.picture}
                  name={msg.user.name}
                  content={msg.text}
                  createdAt={msg.createdAt}
                />
              ))}
              <div id="refEnd" ref={chatEnd} />
            </Scrollbars>
          </Box>
          <Box className={classes.formContainer} display="flex" flexDirection="row" justifyContent="center" minWidth="100%">
            <form onSubmit={sendMessage} style={{ width: '100%' }}>
              <FormControl className={classes.root}>
                <TextField
                  value={message}
                  onChange={(ev) => setMessage(ev.target.value)}
                  className={classes.textfield}
                  InputProps={{ className: classes.input }}
                />
                <IconButton aria-label="send message" size="small" type="submit" variant="contained" color="primary">
                  <SendIcon style={{ fill: '#0d7377' }} />
                </IconButton>
              </FormControl>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

ChatBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatBox);
