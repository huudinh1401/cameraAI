import React, {useState, useEffect} from 'react';
import {
  ScrollView, 
  Text, 
  StyleSheet,
  View, 
  ImageBackground,
  Platform, 
  Image,
  Alert,
  StatusBar,
} from 'react-native';
import Header from '../components/Header.js';
import RowNum1 from '../components/rowNum1.js';
import RowNum2 from '../components/rowNum2.js';
import Footer from '../components/footer.js';

const urlNoti = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/dsThongBao.php';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = ({navigation}) => {
  const [numberNoti, setNumberNoti] = useState('');
  const [dataNoti, setDataNoti] = useState([]);

  useEffect(() => {
    fetch(urlNoti)
    .then((response) => response.json())
    .then((responseJson) => {
      setDataNoti(responseJson)
      setNumberNoti(responseJson.length);
    })
    .catch((error) => {console.error(error)} );
  }, [dataNoti]);
  useEffect(() => {
    const notification = async () =>{
      messaging().setBackgroundMessageHandler(async remoteMessage => {
        navigation.navigate('Notify')
      });
      
      //messaging().onNotificationOpenedApp(remoteMessage => { Alert.alert('Xem thông báo!'); })
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert(
          'Chú ý...!', 'Phát hiện đối tượng trong danh sách cảnh báo!',
          [
            { text: 'Đóng', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'Xem thông báo', onPress: () => { navigation.navigate('Notify') }},
          ],
          {cancelable: false},
        );
      });
      return unsubscribe;
    }
    notification();
  }, []);
    return (
      <View style = {{flex: 1}}>
        <ImageBackground source={require('../images/image_home.jpeg')} style = {styles.image}>
        <StatusBar barStyle={'light-content'}/>
          <View 
            style={{
              shadowColor: 'black', borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
              shadowOffset:{width: 4, height:5}, shadowRadius: 2, shadowOpacity: 0.3, elevation: 10, backgroundColor:'white'
          }} >
              <Header/>
          </View>
          <View  style = {styles.title}>
            <Image style = {{width:45, height: 45}} source={require('../images/NL.jpg')} />
            <Text style = {{paddingLeft: 10, fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Camera An Ninh - AI</Text>
          </View>
          <View style = {{flex: 1, backgroundColor: 'rgba(255,255,255, 0.4)', borderTopLeftRadius: 15, borderTopRightRadius: 15, marginTop: -15,}}>
            <View style ={{ flexDirection:'row', marginTop: 30,  paddingLeft: 20, alignItems:'center', }}>
              <Image style = {{width:25, height: 25, }} source={require('../images/service.png')}></Image>
              <Text 
                style = {{ 
                  fontSize: 14, color: '#660000', paddingLeft: 10, fontStyle: 'italic',
                  textShadowColor: 'gray', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10
              }}>
                Chuyên nghiệp - Chính xác - Hiện đại
              </Text>
            </View>
            <ScrollView style = {styles.viewScroll}>
              
                  <RowNum1 navigation = {navigation}/>
                  <RowNum2 navigation = {navigation}/>
                  
                  <View style = {{height: 100}}></View>
            </ScrollView>
          </View>
          
          <Footer  navigation = {navigation} numberNoti = {numberNoti}/>
      </ImageBackground>
      </View>
    );
}

export default HomeScreen;
const styles = StyleSheet.create({
  image:{
    flex: 1,
    resizeMode: "cover",
    flexDirection: 'column',
  },
  title:{
    backgroundColor: 'orange', 
    zIndex: 10, 
    height: 60,
    marginTop: -15, 
    marginHorizontal: 50, 
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexDirection: 'row',
    shadowColor: 'black', shadowOffset:{width: 4, height:5},
    shadowRadius: 2, shadowOpacity: 0.3,
    elevation: 10,
  },
  viewScroll:{
    marginTop: 10,
    flex: 1,
    marginHorizontal: 20
  },
  
});