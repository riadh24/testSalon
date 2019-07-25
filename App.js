import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListSalon from './Components/ListSalon';
import Nav from './Components/Nav';

import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class App extends Component  {
  render(){
    return(
    <Nav />

  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
