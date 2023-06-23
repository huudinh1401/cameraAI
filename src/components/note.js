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

                <Text style = {{color: 'black', fontWeight: 'bold', fontSize: 14 }}>Chú thích:</Text>

                 <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <Image style = { styles.image } source={require('../images/change.png')} />
                    <Text style = {{color: 'black', marginLeft: 10, fontSize: 12 }}> Dùng để đổi Camera đang xem thành 1 Camera khác.</Text>
                </View>

                <View style = {{flexDirection: 'row', marginTop: 10}}>
                    <Image style = { styles.image } source={require('../images/fullscreen.png')} />
                    <Text style = {{color: 'black', marginLeft: 10, fontSize: 12}}> Dùng để xem toàn màn hình 1 Camera.</Text>
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