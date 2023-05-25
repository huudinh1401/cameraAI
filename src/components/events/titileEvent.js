import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
 } from 'react-native';

export default class TitleEvent extends React.Component {
  render() {
    const {col1, col2, col3, col4} = this.props;
    return (
        <View style={{flexDirection:'row', height: 45, backgroundColor: '#cfe2ff', borderColor: 'black', borderBottomWidth: 0.5, borderTopWidth: 0.5}}>
            <View style={{flex: 1.8, justifyContent: 'center', padding: 2}}>
                <Text style = {styles.textTitle}>{col1}</Text>
            </View>
            <View style={{flex: 3.5, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                <Text style = {styles.textTitle}>{col2}</Text>
            </View>
            <View style={{flex: 2.7, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                <Text style = {styles.textTitle}>{col3}</Text>
            </View>
            <View style={{flex: 2, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                <Text style = {styles.textTitle}>{col4}</Text>
            </View>

        </View>
    );
  }
}
const styles = StyleSheet.create({
    textTitle:{
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});
