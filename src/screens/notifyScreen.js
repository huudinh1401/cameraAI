import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FooterNotify from '../components/footerNotify';
import BouncingPreloader from 'react-native-bouncing-preloaders';

const icons = [
  "https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png",
  "https://www.shareicon.net/data/256x256/2016/05/04/759908_food_512x512.png",
  "https://www.shareicon.net/data/256x256/2016/05/04/759956_food_512x512.png",
  "https://www.shareicon.net/data/256x256/2016/05/04/759954_food_512x512.png",
];
export default class notifyScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style = { styles.mainView }>
          <View style = { styles.notify }>
            <Text style = {{paddingTop: 20}}>Bạn hiện chưa có thông báo mới!</Text>
            <View style = {{justifyContent: 'center', alignContent: 'center', flex: 1, paddingTop:50}}>
              <BouncingPreloader
                icons={icons}
                leftRotation="-350deg"
                rightRotation="100deg"
                leftDistance={-180}
                rightDistance={-250}
                speed={1500} />
            </View>
            
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
    alignItems:"center",
    flex: 1,
    flexDirection: 'column',
  },
});