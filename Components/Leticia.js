import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import data from '../Json/Salon.json';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import data from '../Json/detail.json';

class Leticia extends Component<Props>  {
  constructor(props){
    super(props);
    this.state = {
      dataSource:[],
    }
  }
  componentDidMount(){
      this.setState({dataSource:data.leticiaCoiffure});

  }
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.textStyle}>leticia coiffure</Text>
      <Text style={styles.timeStyle}> 8 h  => 6 h </Text>

      <View style={{marginTop:20}}>
        <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => {

          return (
          <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.navigation.navigate({'detail'})}>
            <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
      )
          }      }
      keyExtractor={(item, index) => index.toString()}
      />
      </View>
      </View>


  );
}
}
export default Leticia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
  buttonStyle: {
	padding:10,
	backgroundColor: '#202646',
	borderRadius:5,
  marginTop:20,
},
textStyle: {
    fontSize:20,
	color: '#ffffff',
	textAlign: 'center'
  },
  timeStyle: {
      fontSize:20,
  	color: '#ffffff',
  	textAlign: 'center',
    marginTop:15
    },

});
