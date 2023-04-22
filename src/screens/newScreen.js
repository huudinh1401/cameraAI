import React, {Component} from 'react';
import { StyleSheet,
  View,
 } from 'react-native';
import { WebView } from 'react-native-webview';


export default class NewScreen extends React.Component {
  render() {
    return (
        <View style = { styles.mainView }>
            <WebView
            style={{ flex: 1 }}
            source={{ uri: 'https://baobinhthuan.com.vn/tin-tuc-binh-thuan-moi-nhat' }}
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
 
});