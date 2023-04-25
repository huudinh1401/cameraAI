import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text
 } from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
        <View style = {{backgroundColor: "white", marginTop: 20, marginHorizontal: 1, marginBottom: 20}}>
            <View style = {{padding: 10, flexDirection: 'column',}}>

                <Text style = {{color: 'black', fontWeight: 'bold' }}>Chú thích:</Text>

                 <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <Image style = { styles.image } source={require('../images/change.png')} />
                    <Text style = {{color: 'black', marginLeft: 10 }}> Dùng để đổi Camera đang xem thành một Camera khác.</Text>
                </View>

                <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <Image style = { styles.image } source={require('../images/fullscreen.png')} />
                    <Text style = {{color: 'black', marginLeft: 10 }}> Dùng để xem toàn màn hình một Camera.</Text>
                 </View>

            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    image: {
      width: 20,
      height: 20,
    },
  
  });