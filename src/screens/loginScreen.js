import React, {Component} from 'react';
import { 
  StyleSheet, 
  View, Text, 
  ImageBackground, 
  TextInput, 
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';

import { Icon } from 'react-native-elements';

const userID = 'admin';
const userPass = 'admin';

export default class loginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidepassword: true,
      id: '',
      password: ''
    }
  }
  setPasswordVisibility = () => {
    this.setState({hidepassword: !this.state.hidepassword});
  }
  handleLogin = () => {
    const { id, password } = this.state
    if (id === userID && password === userPass)
      this.props.navigation.navigate('Home', Alert.alert("Thông báo!","Đăng nhập thành công!"))
    else  Alert.alert("Thông báo!","ID hoặc Mật Khẩu không đúng, vui lòng thử lại!")
  }
  render (){
    return (
      <View style = { styles.mainView }>
        <ImageBackground source={require('../images/imageLogin.jpg')} style = {styles.image}>
          <StatusBar barStyle={'light-content'}/>
          <KeyboardAvoidingView behavior='padding' style = { styles.mainView }>
              <View style = { styles.titleContainer }>
                  <Text style = {styles.textTitle}>Camera An Ninh - AI</Text>
                  <Text style = {styles.text}>Thông Tin Đăng Nhập</Text>
                  <View style = {styles.infoContainer}>

                    {/* Text input nhap tai khoan */} 
                    <View style = {styles.viewID}>
                      <Icon
                          name='person-circle'
                          type='ionicon'
                      />
                      <TextInput style = {styles.input}
                        placeholder= 'Nhập tên tài khoản'
                        placeholderTextColor= {'grey'}
                        returnKeyType='next'
                        autoCorrect={false}
                        onSubmitEditing={()=>this.refs.txtPassword.focus()}
                        onChangeText={id => this.setState({ id })}
                        value={this.state.id}
                      />
                    </View>

                    {/* Text input nhap mat khau */}
                    <View style = {styles.viewID}>
                      <Icon
                            name='key'
                            type='ionicon'
                      />
                      <TextInput style = {styles.input}
                        placeholder= 'Nhập mật khẩu'
                        placeholderTextColor= {'grey'}
                        returnKeyType='go'
                        secureTextEntry = {this.state.hidepassword}
                        autoCorrect={false}
                        ref={'txtPassword'}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                      />

                      {/* Button an, hien mat khau */}
                      <TouchableOpacity 
                        style = {{position: 'absolute', right: 3}} 
                        onPress={this.setPasswordVisibility}>
                        {
                          !this.state.hidepassword ? 
                          <Icon name='eye-outline' type='ionicon' /> 
                          : 
                          <Icon name='eye-off-outline' type='ionicon' /> 
                        }
                      </TouchableOpacity>
                    </View>

                    {/* Button Dang Nhap */}
                    <TouchableOpacity 
                      style = {styles.buttonLogin} 
                      onPress={this.handleLogin}>
                      <Text style = {styles.textButtonLogin}>Đăng nhập</Text>
                    </TouchableOpacity>

                    {/* Button Dang ky */}
                    <TouchableOpacity 
                      style = {styles.buttonRegister} 
                      onPress={() => Alert.alert("Thông báo!","Tính năng này tạm đóng!")}>
                      <Text style = {styles.textButtonRegister}>Đăng ký</Text>
                    </TouchableOpacity>

                  </View>
              </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTitle: {
    color: '#FF0000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    color: '#66FF00',
    fontSize: 14,
    textAlign: 'center'
  },
  infoContainer:{
    height: 80,
    padding: 15,
    marginTop: 20
    
  },
  viewID:{
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginHorizontal: 30,
    height: 40,
    width: 300
  },
  input: {
    paddingHorizontal: 15,
  },
  buttonLogin: {
    marginTop: 15,
    backgroundColor: '#006600',
    paddingVertical: 8,
    marginHorizontal: 100,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth:0.5,
    height: 40
  },
  textButtonLogin: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonRegister: {
    marginTop: 10,
    backgroundColor: '#993366',
    paddingVertical: 8,
    marginHorizontal: 100,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth:0.5,
    height: 40
  },
  textButtonRegister: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});