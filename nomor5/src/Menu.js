import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import { Route, Switch, NavLink } from 'react-router-dom';
import Premium from './Premium';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Bantuan from './Bantuan';
import Daftar from './Daftar';
import Download from './Download';
import Masuk from './Masuk';



const styles = theme => ({
  root: {
    flexGrow: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  

});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar  style={{ backgroundColor: 'red' }}>
        <Toolbar>
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2Hiu3CB9eZyvIQSMaJUfV6NXUvjPz1w36h7bfmz_zTavDqR8" alt= "logo" style={{ maxWidth: 50}} className={classes.menuTypograph} />
          <Grid>
          <Typography variant="h6" color="red" font="Celestial" className={classes.grow}>
            spotify
            
            </Typography>
            </Grid> 
            <Typography variant="h6" color="red" font="Celestial" className={classes.grow}>
           
            
            </Typography>
            
            <div className="nav">
           <Typography variant="h7" color="red" className={classes.grow}>
          <Button color="black" /><NavLink exact to="/" activeClassName="active">Premium</NavLink>
          <Button color="black" /><NavLink to="/bantuan" activeClassName="active">Bantuan</NavLink>
          <Button color="black" /><NavLink to="/download" activeClassName="active">Download</NavLink>
          <Button color="black"/><NavLink to="/daftar" activeClassName="active">Daftar</NavLink>  
          <Button color="black"/><NavLink to="/masuk" activeClassName="active">Masuk</NavLink>  
      
      
           </Typography>
           </div> 
          
        </Toolbar>
      </AppBar>
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path="/" component={Premium}/>
              <Route path="/bantuan" component={Bantuan} />
              <Route path="/download" component={Download} />
              <Route path="/daftar" component={Daftar} />
              <Route path="/masuk" component={Masuk} />
            </Switch>
           
          </CSSTransition>
        </TransitionGroup>
      )} 
      />
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

