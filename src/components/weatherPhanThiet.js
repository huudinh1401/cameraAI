import React, {Component} from 'react';
import { StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
  SafeAreaView
 } from 'react-native';

const date = new Date().getDate(); //Current Date
const month = new Date().getMonth() + 1; //Current Month
const year = new Date().getFullYear(); //Current Year

const url = 'https://api.openweathermap.org/data/2.5/weather?lang=vi&units=metric&appid=dec88dc4a5477646356fe07a2dfa9a14&q=phan%20thiet';

export default class WeatherPhanThiet extends React.Component {

  componentDidMount() {
    this.getThoiTiet()
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentDate: date + ' - ' + month + ' - ' + year,
      currentTemp: '',
      Description: '',
      Icon:'',
      Humidity:'',
      Visibility: '',
      Speed: ''
    }
  }
 
  async getThoiTiet() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ currentTemp: json.main.temp+'°C'});
      this.setState({ Description: json.weather[0].description});
      this.setState({ Visibility: json.visibility / 1000 +' km'});
      this.setState({ Icon: json.weather[0].icon+'.png'});
      this.setState({ Humidity: json.main.humidity+' %'});
      this.setState({ Speed: json.wind.speed +' m/s'});
      this.setState({ isLoading: false});
    } catch (error) {
      console.log(error);
    } 
  }
  render() {
    return (
        <ImageBackground source={require('../images/ptt.jpg')} style = {styles.image}>
          {
            this.state.isLoading ?  (<ActivityIndicator size="large" color="#0000ff" />) :
            (<>
                <View 
                  style ={{ 
                    backgroundColor: 'rgba(25, 25, 112, 0.5)', marginHorizontal: 20, 
                    borderRadius: 20, padding: 30, marginTop: -200, alignItems:'center',
                    shadowColor: 'black', shadowOffset:{width: 0, height:0}, shadowRadius: 1, shadowOpacity: 0.2,
                  }}>
            
                  <Text style ={{color: 'white', fontSize: 22}}> Thành phố  Phan Thiết </Text>
                  <Text style = {{color:'#00FFFF', fontSize: 18}}>{this.state.currentDate}</Text>
                  <Text style ={{color:'yellow', fontSize: 22, marginTop: 30}}>{this.state.Description}</Text>

                  <View style ={{alignItems:'center', marginTop: 15}}>
                    <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                      <Image style = {{height: 80, width: 80}} src = {'https://openweathermap.org/img/wn/'+ this.state.Icon}/>
                      <Text style ={{color: '#00FFFF', fontSize: 40, marginLeft: 5}}> {this.state.currentTemp} </Text>
                    </View>

                    <View>
                      <View style ={{flexDirection:'row'}}>
                        <Text style ={{color: 'yellow', fontSize: 18}}>Độ ẩm: </Text>
                        <Text style ={{color: 'yellow', fontSize: 18}}> {this.state.Humidity}</Text>
                      </View>

                      <View style ={{flexDirection:'row'}}>
                        <Text style ={{color: 'yellow', fontSize: 18}}>Tầm nhìn: </Text>
                        <Text style ={{color: 'yellow', fontSize: 18}}> {this.state.Visibility}</Text>
                      </View>

                      <View style ={{flexDirection:'row'}}>
                        <Text style ={{color: 'yellow', fontSize: 18}}>Tốc độ gió: </Text>
                        <Text style ={{color: 'yellow', fontSize: 18}}> {this.state.Speed}</Text>
                      </View>
                    </View>
                  </View>
                </View>
            </>)
          }
          
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  image:{ height: '100%', justifyContent: "center" },
});