import React, {Component} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style = { styles.bgHeader }>
        <View style = { styles.bgAvatar }>
          <Image style = { styles.avatar } source={require('../images/avatar.png')} resizeMode='stretch'/>  
        </View>
        
        <Text style = { styles.headerStyle }>Camera AI</Text>
        <View style = { styles.bgExit }>
          <Image style = { styles.exit } source={require('../images/exit.png')} resizeMode='stretch'/>
        </View>
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    bgHeader: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: 'blue',
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
      paddingTop: 13,
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