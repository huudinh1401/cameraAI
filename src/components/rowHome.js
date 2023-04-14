import React, {Component} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class RowHome extends React.Component {
  render() {
    return (
      <View style = { styles.row }>
        <View style = { styles.col }>
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/new.png')} />
          </View>
          <Text style = { styles.text } >Tin tức</Text>
        </View>

        <View style = { styles.col }>
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/camera.png')} />
          </View>
          <Text style = { styles.text } >Camera an ninh</Text>
        </View>

        <View style = { styles.col }>
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/weather.png')} />
          </View>
          <Text style = { styles.text } >Thời tiết</Text>
        </View>
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    row: {
        paddingTop: -50,
        flexDirection: 'row',
        height: 100,
    },
    col: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,    
    },
    bgIcon: {
      borderWidth: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'red',
      borderRadius: 10,
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