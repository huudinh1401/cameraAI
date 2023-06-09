import React, {Component} from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default class RowNum1 extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style = { styles.row }>

        <TouchableOpacity style = { styles.col } onPress={() => navigation.navigate('New')}>           
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/new.png')} />
          </View>
          <View style={{paddingVertical: 5}}>
            <Text style = { styles.text } >Tin tức</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.col } onPress={() => navigation.navigate('Camera')}>
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/camera.png')} />
          </View>
          <View style={{paddingVertical: 5}}>
            <Text style = { styles.text } >Camera</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.col } onPress={() => navigation.navigate('Weather')}>
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/weather.png')} />
          </View>
          <View style={{paddingVertical: 5}}>
            <Text style = { styles.text } >Thời tiết</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 120,
    },
    col: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      margin: 15,
      backgroundColor:'white',
      //backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: 15,
      marginHorizontal: 15,
      shadowColor: '#00000',
      shadowOffset:{width: 0, height:5},
      shadowRadius: 2,
      shadowOpacity: 0.3,
      elevation: 10,
    },
    bgIcon: {
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#FF0000',
      borderRadius: 20,
      width: 55,
      height: 55,
      marginTop: 5,
    },
    icon: {
      width: 30,
      height: 30,      
    },
    text: {
      fontSize: 12,
      fontStyle: 'italic',
      color: 'purple',
    },
});