import React, {Component} from 'react';
import { StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';


  const date = new Date().getDate(); //Current Date
  const month = new Date().getMonth() + 1; //Current Month
  const year = new Date().getFullYear(); //Current Year

  const url = 'https://api.openweathermap.org/data/2.5/weather?lang=vi&units=metric&appid=dec88dc4a5477646356fe07a2dfa9a14&q=danang';

export default class WeatherDaNang extends React.Component {

  componentDidMount() {
    this.getNhietDo()
    this.getDescription()
    this.getIcon()
    this.getDoAm()
    this.getTamNhin()
    this.getTocDoGio()
  }

  constructor(props) {
    super(props);
    this.state = {
      currentDate: date + ' - ' + month + ' - ' + year,
      currentTemp: '',
      Description: '',
      Icon:'',
      Humidity:'',
      Visibility: '',
      Speed: ''
    }
  }
 
  async getNhietDo() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ currentTemp: json.main.temp+'°C'});
    } catch (error) {
      console.log(error);
    } 
  }

  async getDescription() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ Description: json.weather[0].description});
    } catch (error) {
      console.log(error);
    } 
  }

  async getIcon() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ Icon: json.weather[0].icon+'.png'});
    } catch (error) {
      console.log(error);
    } 
  }
  async getDoAm() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ Humidity: json.main.humidity+' %'});
    } catch (error) {
      console.log(error);
    } 
  }
  async getTamNhin() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ Visibility: json.visibility / 1000 +' km'});
    } catch (error) {
      console.log(error);
    } 
  }

  async getTocDoGio() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ Speed: json.wind.speed +' m/s'});
    } catch (error) {
      console.log(error);
    } 
  }
  render() {
    const {currentDate, currentTemp, Description, Icon, Humidity, Visibility, Speed} = this.state;
    return (
        <ImageBackground source={require('../images/danang.jpg')} style = {styles.image}>
          <View style ={{alignItems:'center', backgroundColor: 'rgba(0,139,139, 0.5)', marginHorizontal: 20, borderRadius: 20, padding: 30}}>
            <Text style ={{color: 'white', fontSize: 26}}>Thành phố  Đà Nẵng</Text>
            <Text style = {{color:'#00FFFF', fontSize: 20}}>{currentDate}</Text>
            <Text style ={{color:'yellow', fontSize: 24, marginTop: 30}}>{Description}</Text>

            <View style ={{alignItems:'center', marginTop: 15}}>
              <View style = {{flexDirection: 'row'}}>
                <Image style = {{height: 90, width: 90}} src= {'https://openweathermap.org/img/wn/' + Icon} />
                <Text style ={{color: '#880000', fontSize: 60, marginLeft: 30}}> {currentTemp} </Text>
              </View>
              <View>
                <View style ={{flexDirection:'row'}}>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}>Độ ẩm: </Text>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}> {Humidity}</Text>
                </View>

                <View style ={{flexDirection:'row'}}>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}>Tầm nhìn: </Text>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}> {Visibility}</Text>
                </View>

                <View style ={{flexDirection:'row'}}>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}>Tốc độ gió: </Text>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}> {Speed}</Text>
                </View>
                
              </View>
            </View>
          </View>
        </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});