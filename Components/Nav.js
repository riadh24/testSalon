import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListSalon from './ListSalon';
import Leticia from './Leticia';
import Rose from './Rose';

import {createStackNavigator, createAppContainer} from 'react-navigation';



const NavStack  = createStackNavigator({
  homeScreen:{
    screen:ListSalon
  },
    detail:{
      screen:Leticia
},
    detailR:{
        screen:Rose
      },
})
const Nav = createAppContainer(NavStack);

export default Nav;
