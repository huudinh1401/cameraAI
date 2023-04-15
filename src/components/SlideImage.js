import React, {Component} from 'react';
import { StyleSheet, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';


export default class SlideImage extends React.Component {
  render() {
    return (
      <View >
        <Swiper autoplay={true} autoplayTimeout={5} autoplayDirection={false} style={styles.wrapper}>
            <Image style = { styles.bgImg } source={require('../images/PhanThiet.jpg')} />
            <Image style = { styles.bgImg } source={require('../images/PhanThiet.png')} />
            <Image style = { styles.bgImg } source={require('../images/PhanThiet.jpg')} />
            <Image style = { styles.bgImg } source={require('../images/PhanThiet.png')} />
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    wrapper: {
        height: 125,
    },
    bgImg: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        height: 100,
        width: '100%',
    },
});