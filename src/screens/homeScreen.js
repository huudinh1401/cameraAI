import React, {Component} from 'react';
import {
  ScrollView, 
  Text, 
  StyleSheet,
  View, 
  ImageBackground,
  Platform, 
  Image, 
  StatusBar,
} from 'react-native';
import Header from '../components/Header.js';
import RowNum1 from '../components/rowNum1.js';
import RowNum2 from '../components/rowNum2.js';
import Footer from '../components/footer.js';

export default class homeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style = {{flex: 1}}>
        <ImageBackground source={require('../images/HinhNenHome.jpeg')} style = {styles.image}>
        <StatusBar barStyle={'light-content'}/>
          <View >
              <Header/>
          </View>
          <View style = {[
            { backgroundColor: 'orange' ,height: 60, marginTop: -15, marginHorizontal: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'},
            Platform.select({ ios: { zIndex: 10 }, android: { zIndex: 10 } }),
          ]}>
            <Image style = {{width:45, height: 45}} source={require('../images/NL.jpg')} />
            <Text style = {{paddingLeft: 10, fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Camera An Ninh - AI</Text>
          </View>
          <View style = {{flex: 1, marginHorizontal: 10, backgroundColor: 'rgba(245,245,220, 0.5)', borderTopLeftRadius: 8, borderTopRightRadius: 8, marginTop: -15,}}>
            <View style ={{flexDirection:'row', marginTop: 30,  paddingLeft: 20, alignItems:'center'}}>
              <Image style = {{width:25, height: 25, }} source={require('../images/service.png')}></Image>
              <Text style = {{ fontSize: 16, color: '#660000', paddingLeft: 10, fontStyle: 'italic'}}>
                Chuyên nghiệp - Chính xác - Công bằng 
              </Text>
            </View>
            
            <ScrollView style = {styles.viewScroll}>
              
                  <RowNum1 navigation = {navigation}/>
                  <RowNum2 navigation = {navigation}/>
                  
                  <View style = {{height: 100}}></View>
            </ScrollView>
          </View>
          
          <Footer
            navigation = {navigation}
          />
      </ImageBackground>
      </View>
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