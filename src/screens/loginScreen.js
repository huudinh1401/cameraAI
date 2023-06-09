import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, View, Text, 
  ImageBackground, TextInput, 
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar, Alert,
  Platform, Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Icon } from 'react-native-elements';
import messaging from '@react-native-firebase/messaging';

import {PermissionsAndroid} from 'react-native'; 
Platform.OS === 'ios' ? null : PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) { // console.log('Authorization status:', authStatus);
  }
}

const LoginScreen =({navigation}) =>{
  const [hidepassword, setHidepassword] = useState(true);
  const [id, setId] = useState('');
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('');
  useEffect(() => {
    const notification = async () =>{
      await requestUserPermission();
      await getToken();
    }
    notification();
    getID();
  }, []);
  async function getToken() {
    const deviceToken = await messaging().getToken();
    setToken(deviceToken);
  }

  const addToken = () =>{
    fetch("https://odoo.nguyenluanbinhthuan.com/dataCamera/addDeviceToken.php",{
      method: "POST",
      headers:{ "Accept":"application/json", "Content-Type":"application/json" },
      body:JSON.stringify({  "TOKEN": token })
    })
    .then((response) => response.json())
    .then((responseJson) => { console.log(responseJson) })
    .catch((error) => { Alert.alert("Thông báo!","Không có kết nối mạng\nVui lòng thử lại!") });
  }

  const handleLogin = (id) => {
    fetch('https://odoo.nguyenluanbinhthuan.com/dataCamera/login.php', {
      method: "POST",
      headers:{ "Accept":"application/json", "Content-Type":"application/json" },
      body:JSON.stringify({ "ID": id, "PASS": password})
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.login === 'true')
        {
          navigation.navigate('Home');
          addToken();
          saveID(id);
          
        }  else  Alert.alert("Thông báo!","ID hoặc Mật Khẩu không đúng!\nVui lòng thử lại!")
      })
      .catch((error) => { Alert.alert("Thông báo!","Không có kết nối mạng\nVui lòng thử lại!") });
  }
  const saveID = async (value) => {
    try {
      await AsyncStorage.setItem('myID', value);
    } catch (error) {}
  };
  const getID = async () => {
    try {
      const value = await AsyncStorage.getItem('myID');
      if (value !== null) { setId(value)}
    } catch (error) {}
  };
    return (
      <View style = {{flex: 1,}}>
        <ImageBackground source={require('../images/nenLogin.jpg')} style = {{flex: 1, resizeMode: "cover", justifyContent: "center", flexDirection: 'column'}}>
          <StatusBar barStyle={'light-content'}/>
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          >
                <View style = {{ alignItems: 'center', justifyContent: 'center' }}>
                  <View style = {{  width: 120, height: 120, alignItems: 'center', justifyContent: 'center', shadowColor: 'black', shadowOffset:{width: 0, height: 5}, shadowRadius: 2, shadowOpacity: 0.5}}>
                    <Image style = {{  width: 120, height: 120, marginBottom: 10}} source={require('../images/logoVn.png')} />
                  </View>
                  <View style={{shadowColor: 'black', shadowOffset:{width: 1, height: 3}, shadowRadius: 2, shadowOpacity: 0.5}}>
                    <Text style = {{ color: '#FF0000', fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>Camera an ninh - AI</Text>
                    <Text style = {{ color: '#00FFFF', fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Thông tin đăng nhập</Text>
                  </View>
                </View>
                  
                <View style = {{padding: 15, marginTop: 5}}>

                  {/* Text input nhap tai khoan */} 
                  <View style = {styles.viewID}>
                    <Icon name='person-circle' type='ionicon' />
                    <TextInput style = {{paddingHorizontal: 15, width: 250, height:40, color: 'black', fontSize: 12, marginTop: 5}}
                      placeholder= 'Nhập tên tài khoản'
                      placeholderTextColor= {'grey'}
                      returnKeyType='next'
                      autoCorrect={false}
                      autoCapitalize= 'none'
                      onChangeText={(text) => setId(text)}
                      value={id}
                    />
                  </View>

                  {/* Text input nhap mat khau */}
                  <View style = {styles.viewID}>
                    <Icon name='key' type='ionicon' />
                    <TextInput style = {{paddingHorizontal: 15, width: 220, height:40, color: 'black', fontSize: 12, marginTop: 5}}
                      placeholder= 'Nhập mật khẩu'
                      placeholderTextColor= {'grey'}
                      returnKeyType='go'
                      secureTextEntry = {hidepassword}
                      autoCapitalize= 'none'
                      autoCorrect={false}
                      onChangeText={(text) => setPassword(text)}
                      value={password}
                    />
                    {/* btn an, hien mat khau */}
                    <TouchableOpacity style = {{position: 'absolute', right: 3}}  onPress={()=>setHidepassword(!hidepassword)}>
                      { !hidepassword ?  <Icon name='eye-outline' type='ionicon' /> : <Icon name='eye-off-outline' type='ionicon' />  }
                    </TouchableOpacity>
                  </View>
                  {/* btn Dang Nhap */}
                  <TouchableOpacity style = {styles.buttonLogin}  onPress={()=>handleLogin(id)}>
                    <Text style = {{ color: 'white', fontSize: 16, textAlign: 'center'}}>Đăng nhập</Text>
                  </TouchableOpacity>
              </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
}
export default LoginScreen;
const styles = StyleSheet.create({
  viewID:{
    alignItems: 'center',       flexDirection: 'row',         backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'white',       borderWidth: 1,               paddingHorizontal: 10,
    marginBottom: 10,           marginHorizontal: 30,         height: 45,
    width: 300,                 borderRadius: 5,
    shadowColor: 'black',       shadowOffset:{width: 4, height:5},
    shadowRadius: 2,            shadowOpacity: 0.3,
  },
  buttonLogin:{
    marginTop: 10,              backgroundColor: '#990000',   paddingVertical: 8,
    marginHorizontal: 80,       borderRadius: 20,             borderColor: 'white',
    borderWidth:0.5,            height: 45,                   justifyContent: 'center',
    shadowColor: 'black',       shadowOffset:{width: 4, height:5},
    shadowRadius: 2,            shadowOpacity: 0.3,
    elevation: 10,
  },

});