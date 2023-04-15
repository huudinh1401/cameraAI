import React, {Component} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'

export default class Header extends React.Component {
  render() {
    return (
      <View style = { styles.bgHeader }>
        <View style = { styles.bgAvatar }>
        <Icon
            style = { styles.avatar }
            name='person-circle-outline'
            type='ionicon' /> 
        </View>
        
        <Text style = { styles.headerStyle }>Camera AI</Text>
        <View style = { styles.bgExit }>
        <Icon
            style = { styles.avatar }
            name='exit-outline'
            type='ionicon' /> 
        </View>
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    bgHeader: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#339966',
        elevation: 10,
        height: 75,
        shadowColor: '#00000',
        shadowOffset:{width: 0, height:10},
        shadowOpacity: 0.2,
        position: 'relative',
        flexDirection: 'row',
    },
    headerStyle: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 11,
        color: '#fff',
        flex: 1,
        
    },
    bgAvatar: {
      alignItems: 'flex-start',
      paddingTop: 15,
      paddingLeft: 8,
      width: 30,
      height: 30,
      flex: 1
    },
    bgExit: {
      paddingRight: 8,
      alignItems: 'flex-end',
      paddingTop: 15,
      width: 30,
      height: 30,
      flex: 1
    },
    avatar: {
        width: 30,
        height: 30,
    },
    exit: {
        width: 30,
        height: 30,
      },

});