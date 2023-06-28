import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import SlideImage from '../components/SlideImage.js';
import { Icon } from 'react-native-elements'

export default class Header extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style = { styles.bgHeader }>
        <SlideImage/>
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    bgHeader: {
        backgroundColor: 'beige',
        height: 170,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'relative',
        flexDirection: 'row',

    },
});