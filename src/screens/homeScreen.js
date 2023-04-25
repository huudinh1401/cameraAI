import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet, View, ImageBackground, SafeAreaView, Image} from 'react-native';
import Header from '../components/Header.js';
import RowHome from '../components/rowHome.js';
import RowHomeMid from '../components/rowHomeMid.js';
import Footer from '../components/footer.js';

export default class homeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style = {{flex: 1}}>
        <ImageBackground source={require('../images/HinhNenHome.jpeg')} style = {styles.image}>
          <View >
              <Header/>
          </View>
          <View style = {{ backgroundColor: 'beige' ,height: 60, marginTop: -40, marginHorizontal: 30, borderRadius: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
            <Image style = {{width:40, height: 40}} source={require('../images/logo.png')} />
            <Text style = {{paddingLeft: 20, fontSize: 20, color: '#CC0000'}}>Camera An Ninh - AI</Text>
          </View>
          <View style = {{flex: 1, marginHorizontal: 10, backgroundColor: 'rgba(245,245,220, 0.2)', borderTopLeftRadius: 8, borderTopRightRadius: 8, marginTop: -10}}>
            <View style ={{flexDirection:'row', marginTop: 30,  paddingLeft: 25, alignItems:'center'}}>
              <Image style = {{width:25, height: 25, }} source={require('../images/service.png')}></Image>
              <Text style = {{ fontSize: 14, color: '#660000', fontFamily: 'serif', paddingLeft: 10, fontStyle: 'italic'}}>
              Chuyên nghiệp - Chính xác - Công bằng 
              </Text>
            </View>
            
            <ScrollView style = {styles.viewScroll}>
              
                  <RowHome navigation = {navigation}/>
                  <RowHomeMid/>
                  <RowHome navigation = {navigation}/>
                  <RowHomeMid/>
                  <RowHome navigation = {navigation}/>
                  <RowHomeMid/>
                  <RowHome navigation = {navigation}/>
                  <RowHomeMid/>
                  <RowHome navigation = {navigation}/>
                  <RowHomeMid/>
                  <RowHome navigation = {navigation}/>
                  <RowHomeMid/>
                  <RowHome navigation = {navigation}/>
                  <RowHomeMid/>
                  <RowHome navigation = {navigation}/>
                  <RowHomeMid/>
                  <RowHome navigation = {navigation}/>
                  <RowHomeMid/>
                  <RowHome navigation = {navigation}/>
                  <RowHomeMid/>
                  <View style = {{height: 100}}></View>
            </ScrollView>
          </View>
          
          <Footer
            navigation = {navigation}
          />
      </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    flex: 1,
    resizeMode: "cover",
    flexDirection: 'column',
  },
  viewScroll:{
    marginTop: 10,
    flex: 1,
  },
  
});