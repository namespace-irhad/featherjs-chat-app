import {
  Box, Card, CardContent, CardMedia, Typography, Avatar, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-timeago';
import isImageUrl from 'is-image-url';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './styles';

const Message = ({
  name, picture, createdAt, classes, content,
}) => {
  console.log(content, isImageUrl(content));
  return (
    <Card className={classes.cardContainer}>
      <CardContent className={classes.container}>
        <Box className={classes.userWrapper}>
          <Avatar alt={name} src={picture} />
          <Typography className={classes.nameContainer} variant="subtitle2">{`${name} `}</Typography>
        </Box>
        <Scrollbars
          className={classes.scrollbar}
          autoHeight

        >
          <Box component="span" className={classes.speechBubble} />
          {isImageUrl(content) ? (
            <Box className={classes.imageContent}>
              <CardMedia
                style={{
                  height: '100%', maxWidth: '300px', minHeight: '300px', maxHeight: '500px',
                }}
                image={content}
              />
            </Box>
          )
            : <Typography className={classes.content} variant="body1">{content}</Typography>}
        </Scrollbars>
        <Typography className={classes.createdWrapper} variant="caption"><TimeAgo date={createdAt} /></Typography>
      </CardContent>
    </Card>
  );
};

Message.defaultProps = {
  picture: null,
};

Message.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);
