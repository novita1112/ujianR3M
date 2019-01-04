import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import './styles/styles.css';

import configureStore from './store/config/configureStore';
import {login,logout} from './store/actions/auth';


const store = configureStore();
store.subscribe(()=>{
  console.log(store.getState());
});



const Pp = () => (
  <Provider store={store}>
  
  </Provider>
);


store.dispatch(logout());


render(<Pp />, document.getElementById('Pp'));