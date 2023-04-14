import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class notifyScreen extends React.Component {
  render() {
    return (
      <View style = { styles.notify }>
        <Text>Vui lòng đăng nhập để nhận thông báo!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notify:{
    alignItems:"center"
  },
});