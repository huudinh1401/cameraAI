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


export default class WeatherHCm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: date + ' - ' + month + ' - ' + year 
    }
  }
  render() {
    return (
        <ImageBackground source={require('../images/saigon.jpeg')} style = {styles.image}>
          <View style ={{alignItems:'center', backgroundColor: 'rgba(0,0,255, 0.5)', marginHorizontal: 20, borderRadius: 20, padding: 30}}>
            <Text style ={{color: 'white', fontSize: 26}}>
             Thành phố  Hồ Chí Minh
            </Text>
            <Text style = {{color:'limegreen', fontSize: 20}}>{this.state.currentDate}</Text>
            <Text style ={{color:'yellow', fontSize: 24, marginTop: 30}}>May rai rac</Text>

            <View style ={{alignItems:'center', marginTop: 15}}>
              <View style = {{flexDirection: 'row'}}>
                <Image style = {{height: 90, width: 90}} src= {'https://openweathermap.org/img/wn/02d.png'} />
                <Text style ={{color: '#880000', fontSize: 70, marginLeft: 30}}>
                  33°C
                </Text>
              </View>
              <View>
                <View style ={{flexDirection:'row'}}>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}>Độ ẩm - humidity: </Text>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}> 50</Text>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}> % </Text>
                </View>

                <View style ={{flexDirection:'row'}}>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}>Tầm nhìn xa - visibility: </Text>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}> 05</Text>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}> km </Text>
                </View>

                <View style ={{flexDirection:'row'}}>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}>Tốc độ gió - speed: </Text>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}> 7.5</Text>
                  <Text style ={{color: '#00FFFF', fontSize: 18}}> m/s </Text>
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