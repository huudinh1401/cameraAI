import React, {Component} from 'react';
import {Alert, Button, ScrollView, Text, StyleSheet, View} from 'react-native';
import Header from '../components/Header.js';
import SlideImage from '../components/SlideImage.js';
import RowHome from '../components/rowHome.js';
import RowHomeMid from '../components/rowHomeMid.js';
import Footer from '../components/footer.js';

export default class homeScreen extends React.Component {
  render() {
    return (
      <View style = { styles.mainView }>
        <Header/>
        <View>
          <ScrollView style = { styles.Scroll }>
            <SlideImage/>
      

            <View style = { styles.viewScroll }> 
              <RowHome/>
              <RowHomeMid/>
              <RowHome/>
              
              
            </View>

          </ScrollView>
        </View>
        
        
        <Footer/>
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
  viewScroll:{
    marginTop: -25,
  },
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