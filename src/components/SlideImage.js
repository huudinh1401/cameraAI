import React, {Component} from 'react';
import { StyleSheet, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';


export default class SlideImage extends React.Component {
  render() {
    return (
      <View >
        <Swiper autoplay={true} autoplayTimeout={5} autoplayDirection={false} >
            <Image style = { styles.bgImg } source={require('../images/daongdia.jpg')} />
            <Image style = { styles.bgImg } source={require('../images/PhanThiet.jpg')} />
            <Image style = { styles.bgImg } source={require('../images/SlidePhanThiet1.jpg')} />
            <Image style = { styles.bgImg } source={require('../images/thapnuoc.jpg')} />
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    bgImg: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 125,
        width: '100%',
    },
});