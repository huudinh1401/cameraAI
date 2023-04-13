import React, {Component} from 'react';
import { Text, StyleSheet, View} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style = { styles.bgHeader }>
        <Text style = { styles.headerStyle }>Camera AI</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    bgHeader: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#C02441',
        alignItems:'center',
        elevation: 10,
        height: 85,
        shadowColor: '#00000',
        shadowOffset:{width: 0, height:10},
        shadowOpacity: 0.2,
        position: 'relative'
    },
      headerStyle: {
        fontSize: 20,
        paddingTop: 11,
        color: '#fff',
    },

});