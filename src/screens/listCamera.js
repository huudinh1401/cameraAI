import React, {Component} from 'react';
import { StyleSheet,
  View,
  Image
 } from 'react-native';

export default class NewScreen extends React.Component {
  render() {
    return (
        <View style = { styles.mainView }>
          {
            this.state.isLoading ?  
            ( <>
                <View style = {{alignItems: 'center'}}>
                <Image style = {{height: 150, width: 150, marginBottom: 30}} source={require('../images/logo.png')} />
                  <EatBeanLoader />
                </View>

            </>)
               :
            (<>
            <WebView
              style={{ flex: 1 }}
              source={{ uri: 'https://baobinhthuan.com.vn/tin-tuc-binh-thuan-moi-nhat' }}
            />
            </>)
          }
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
  mainView: {
    backgroundColor: '#FFFF66',
    flex: 1,
    justifyContent:'center',
  },
 
});