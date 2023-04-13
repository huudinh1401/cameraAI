import React, {Component} from 'react';
import {Alert, Button, ScrollView, Text, StyleSheet, View} from 'react-native';
import Header from './src/components/Header.js';
import SlideImage from './src/components/SlideImage.js';

type Props = {};
export default class App extends Component<Props> {
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
    marginTop: -30,
    marginLeft: 5,
    marginRight: 5
  },
});