import React, {Component} from 'react';
import {
    TouchableOpacity, 
    ScrollView, 
    StyleSheet, 
    Dimensions,
    Image, 
    View
} from 'react-native';
import ItemCamera from '../components/itemCamera';
import Note from '../components/note';


const windowWidth = Dimensions.get('window').width;
const width1 = windowWidth/2 -2;
const width2 = windowWidth -2;
const url = 'rtsp://admin:Admin123456@hoaphu.zapto.org:555/Streaming/channels/101'; 

export default class cameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RTSP1: '1',
      RTSP2: '2',
      RTSP3: '3',
    }
  }

  _onPressChangeCam = (rtsp) => {
    this.props.navigation.navigate('DsCam',{rtsp}) 
  }
  render() {
    const { navigation } = this.props;
    const { RTSP1, RTSP2, RTSP3 } = this.state;
    const Rtsp1 = this.props.navigation.getParam ( 'rtsp1', 'No_Name');
    const Rtsp2 = this.props.navigation.getParam ( 'rtsp2', 'No_Name');
    const Rtsp3 = this.props.navigation.getParam ( 'rtsp3', 'No_Name');
    return (
        <View style = { styles.mainView }>
            <ScrollView style = { styles.Scroll }>
                <View style = { styles.viewCam }>
        {/* Cam 1*/}
                    <View style={{flexDirection: 'row',flex: 1}}>
                        <ItemCamera url = { Rtsp1 } widthItem = {width2} navigation = {navigation}/>
                    </View>

                    {/* button change, full*/}
                    <View style={{height: 40, marginRight: 1, flexDirection: 'row', flex: 1}}>
                        <TouchableOpacity
                            style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 15}}
                            onPress={() => navigation.navigate('DsCam', {RTSP1})}
                        >
                            <Image style = { styles.image } source={require('../images/change.png')} /> 
                        </TouchableOpacity>
                        <TouchableOpacity
                            style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginRight: 15}}
                        >
                            <Image style = { styles.image } source={require('../images/fullscreen.png')} /> 
                        </TouchableOpacity>
                    </View>
                    {/* end button change, full*/}

                        {/* <View>
                          <ItemCamera url = { Rtsp2 } widthItem = {width1} navigation = {navigation}/>

                          
                          <View style={{height: 40, marginRight: 1, flexDirection: 'row', flex: 1}}>
                              <TouchableOpacity
                                  style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 15}}
                                  onPress={() => navigation.navigate('DsCam',{RTSP2})}
                              >
                                  <Image style = { styles.image } source={require('../images/change.png')} /> 
                              </TouchableOpacity>
                              <TouchableOpacity
                                  style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginRight: 15}}
                              >
                                  <Image style = { styles.image } source={require('../images/fullscreen.png')} /> 
                              </TouchableOpacity>
                          </View>
                        </View>  */}
                    

 {/* Cam 2*/}
                    <View style={{flexDirection: 'row',flex: 1}}>
                        <ItemCamera url = { Rtsp2 } widthItem = {width2} navigation = {navigation}/>
                    </View>

                    {/* button change, full*/}
                    <View style={{height: 40, marginRight: 1, flexDirection: 'row', flex: 1}}>
                        <TouchableOpacity
                            style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 15}}
                            onPress={() => navigation.navigate('DsCam', {RTSP2})}
                        >
                            <Image style = { styles.image } source={require('../images/change.png')} /> 
                        </TouchableOpacity>
                        <TouchableOpacity
                            style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginRight: 15}}
                        >
                            <Image style = { styles.image } source={require('../images/fullscreen.png')} /> 
                        </TouchableOpacity>
                    </View>
                    {/* end button change, full*/}

  {/* Cam 3 */}
                    <View style={{flexDirection: 'row',flex: 1}}>
                        <ItemCamera url = {Rtsp3} widthItem = {width2} navigation = {navigation}/>
                    </View>

                    {/* button change, full*/}
                    <View style={{height: 40, marginRight: 1, flexDirection: 'row', flex: 1}}>
                        <TouchableOpacity
                            style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 15}}
                            onPress={() => navigation.navigate('DsCam',{RTSP3})}
                        >
                            <Image style = { styles.image } source={require('../images/change.png')} /> 
                        </TouchableOpacity>
                        <TouchableOpacity
                            style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginRight: 15}}
                        >
                            <Image style = { styles.image } source={require('../images/fullscreen.png')} /> 
                        </TouchableOpacity>
                    </View>
                    {/* end button change, full*/}

                </View>
                
                <Note/>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
  },
  viewCam: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginTop: 2,
    marginHorizontal: 1,
  },
  Scroll:{
    flexDirection: 'column',
  },
  image: {
    width: 20,
    height: 20,
  },

});