import React, {Component} from 'react';
import { StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions
 } from 'react-native';
import WeatherPhanThiet from '../components/weatherPhanThiet';
import WeatherHCm from '../components/weatherHCM';
import WeatherHaNoi from '../components/weatherHaNoi';
import WeatherDaLat from '../components/weatherDaLat';

import Swiper from 'react-native-swiper';



  const windowheight = Dimensions.get('window').height;

export default class WeatherScreen extends React.Component {
  render() {
    return (
      <View style = { styles.mainView }>
        <Swiper autoplay={true} autoplayTimeout={8} autoplayDirection={true} style={styles.wrapper}>

          <WeatherPhanThiet/>

          <WeatherHCm/>

          <WeatherHaNoi/>

          <WeatherDaLat/>
        
        </Swiper>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: windowheight,
  },
  mainView: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
 
});