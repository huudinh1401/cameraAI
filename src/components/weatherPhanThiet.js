import React, {Component} from 'react';
import { StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator
 } from 'react-native';

const date = new Date().getDate(); //Current Date
const month = new Date().getMonth() + 1; //Current Month
const year = new Date().getFullYear(); //Current Year

const url = 'https://api.openweathermap.org/data/2.5/weather?lang=vi&units=metric&appid=dec88dc4a5477646356fe07a2dfa9a14&q=phan%20thiet';

export default class WeatherPhanThiet extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000)
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
                <View style ={{alignItems:'center', backgroundColor: 'rgba(25, 25, 112, 0.5)', marginHorizontal: 20, borderRadius: 20, padding: 30}}>
            
                  <Text style ={{color: 'white', fontSize: 26}}> Thành phố  Phan Thiết </Text>
                  <Text style = {{color:'#00FFFF', fontSize: 20}}>{this.state.currentDate}</Text>
                  <Text style ={{color:'yellow', fontSize: 24, marginTop: 30}}>{this.state.Description}</Text>

                  <View style ={{alignItems:'center', marginTop: 15}}>
                    <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                      <Image style = {{height: 80, width: 80}} src = {'https://openweathermap.org/img/wn/'+ this.state.Icon}/>
                      <Text style ={{color: '#00FFFF', fontSize: 60, marginLeft: 5}}> {this.state.currentTemp} </Text>
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

  mainView: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
  image:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});