import React, {Component} from 'react';
import { StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert
 } from 'react-native';

const urlCam = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/dsCam.php';

export default class ItemArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrCam: [],
      arrCamKV: [],
    }
  }
  componentDidMount() {
    this.getArrCam()
  }
  async getArrCam() {
    try {
      const response = await fetch(urlCam);
      const json = await response.json();
      this.setState({ arrCam: json });
      const {arrCam}=this.state;
      const {idNVR}=this.props;
      for (var i = 0; i < arrCam.length; i++)
      {
        if (arrCam[i].Nvr == idNVR){
          if (arrCam[i].RTSP !== null){
            this.setState({arrCamKV: 
              this.state.arrCamKV.concat([{
                key: arrCam[i].key, name: arrCam[i].CamName, rtsp: arrCam[i].RTSP,
              }])
            })
          }
          else {
            this.setState({arrCamKV: 
              this.state.arrCamKV.concat([{
                key: arrCam[i].key, name: arrCam[i].CamName, rtsp: 'No_Link',
              }])
            })
          }
        }
      }
    } catch (error) {Alert.alert('Lỗi!','Không có kết nối mạng...\nVui lòng thử lại!')} 
  }
  _onPressGetRTSP = (rtsp, name) => {
    const { navigation, route} = this.props;
    const { RTSP1, RTSP2, RTSP3 } = route.params;
    
    if (RTSP1 === '1'){
      navigation.navigate('Camera',{rtsp1: rtsp, camName1: name}) 
    }
    if (RTSP2 === '2'){
      navigation.navigate('Camera',{rtsp2: rtsp, camName2: name}) 
    }
    if (RTSP3 === '3'){
      navigation.navigate('Camera',{rtsp3: rtsp, camName3: name}) 
    }
  }
  render() {
    const {navigation} = this.props;
    
    return (
        <View style = { styles.container }>
         <FlatList
          data={this.state.arrCamKV}
          renderItem={({item}) =>
          <View>
            <TouchableOpacity
              onPress={() => this._onPressGetRTSP(item.rtsp, item.name)}
            >
              <View style ={{flexDirection: 'row', height: 40, borderColor: 'gray', borderTopWidth: 1, marginHorizontal: "5%", justifyContent: 'center', backgroundColor: 'gainsboro' }}>
                <View style ={{flex: 1, alignItems:'center', paddingLeft: 10, flexDirection: 'row'}}>
                  <Image style = {{width: 25, height: 25, marginRight: 20}} source={require('../images/camera.png')} />
                  <View>
                    <Text style = {styles.text}>{item.name}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          }/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent:'center',
  },
  text:{
    color: 'blue',
    fontSize: 16,
  },
 
});