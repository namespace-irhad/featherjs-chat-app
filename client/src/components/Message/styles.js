const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    paddingBottom: '5px !important',
    paddingTop: '5px !important',
  },
  userWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContainer: {
    background: 'none',
    margin: '10px 0',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    color: '#eeeeee',
  },
  content: {
    flex: '1',
    background: '#0d7377',
    padding: '0 10px',
    marginLeft: '10px',
    minHeight: '70px',
    display: 'flex',
    alignItems: 'center',
  },
  imageContent: {
    width: '100%',
    background: '#0d7377',
    padding: '0 10px',
    marginLeft: '10px',
    height: '100%',
  },
  nameContainer: {
    padding: '0 10px',
  },
  scrollbar: {
    borderRadius: '5px',
    maxWidth: '90%',
  },
  createdWrapper: {
    width: '100px',
    paddingLeft: '10px',
  },
  speechBubble: {
    position: 'absolute',
    left: '0',
    top: '70%',
    width: '0',
    height: '0',
    border: '10px solid transparent',
    borderRightColor: '#0d7377',
    borderLeft: '0',
    marginTop: '-25px',
  },
};

export default styles;
