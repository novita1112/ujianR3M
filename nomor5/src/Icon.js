import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
            </Typography>
        <img src = "https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/1024/itunes_5122x.png" alt= "logo" style={{ maxWidth: 50}} className={classes.menuTypograph} />

        <img src = "http://www.myiconfinder.com/uploads/iconsets/256-256-100a90034da88f8063ebd14eec67d229-tablet.png" alt= "logo" style={{ maxWidth: 50}} className={classes.menuTypograph} />
        <img src = "https://cdn.notonthehighstreet.com/fs/cd/99/f1ac-e19c-43ec-8f7c-9b88bb1dc1b5/original_spotify-personalised-sound-wave-print.jpg" alt= "logo" style={{ maxWidth: 50}} className={classes.menuTypograph} />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
