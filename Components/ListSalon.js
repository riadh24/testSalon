import React, {Component} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import data from '../Json/Salon.json';


class ListSalon extends Component<Props>  {
  constructor(props){
    super(props);
    this.state = {
      dataSource: [],
      id: "",
    }
  }
  componentDidMount(){
      this.setState({dataSource:data.Salon});

  }
/*_onSalon(){
    if (dataSource.item.name=Rose)
    {this.setState({id:Rose})}
    else {this.setState({id:Leticia})}
  }*/
  render(){

    return(
      <View style={styles.container}>
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


  );
}
}
export default ListSalon;

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
});
