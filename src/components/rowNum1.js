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
          <View style={{paddingVertical: 10}}>
            <Text style = { styles.text } >Tin tức</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.col } onPress={() => navigation.navigate('Camera')}>
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/camera.png')} />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style = { styles.text } >Camera an ninh</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.col } onPress={() => navigation.navigate('Weather')}>
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/weather.png')} />
          </View>
          <View style={{paddingVertical: 10}}>
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
    },
    bgIcon: {
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#FF0000',
      borderRadius: 20,
      width: 60,
      height: 60,      
    },
    icon: {
      width: 40,
      height: 40,      
    },
    text: {
      fontSize: 15,
      fontStyle: 'italic',
      color: 'purple',
    },
});