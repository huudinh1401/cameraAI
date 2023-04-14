import React, {Component} from 'react';
import {Alert, Button, ScrollView, Text, StyleSheet, View} from 'react-native';
import Header from '../components/Header.js';
import SlideImage from '../components/SlideImage.js';

export default class homeScreen extends React.Component {
  render() {
    return (
      <View>
        <Header/>
        <ScrollView style = { styles.Scroll }>
          <SlideImage/>

          <Text>Welcome to AI Camera System</Text>
          <Text>Cong Ty TNHH Nguyen Luan</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>Cong Ty TNHH Nguyen Luan</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>Cong Ty TNHH Nguyen Luan</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>Cong Ty TNHH Nguyen Luan</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>Cong Ty TNHH Nguyen Luan</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>Cong Ty TNHH Nguyen Luan</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>Cong Ty TNHH Nguyen Luan</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>Cong Ty TNHH Nguyen Luan</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>Cong Ty TNHH Nguyen Luan</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>Cong Ty TNHH Nguyen Luan</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>To get started, edit App.js</Text>
          <Text>Welcome to AI Camera System</Text>
          <Text>To get started, edit App.js</Text>


        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Scroll:{
    marginTop: -20,
    marginLeft: 5,
    marginRight: 5
  },
  Space:{
    backgroundColor: '#339966',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 20,
    shadowColor: '#00000',
    shadowOffset:{width: 0, height:10},
    shadowOpacity: 0.2,
    position: 'relative'
  },
});