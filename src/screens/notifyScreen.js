import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FooterNotify from '../components/footerNotify';

export default class notifyScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style = { styles.mainView }>
          <View style = { styles.notify }>
            <Text>Bạn hiện chưa có thông báo mới!</Text>
          </View>
          <FooterNotify
          navigation = {navigation}
          />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
  notify:{
    alignItems:"center"
  },
});