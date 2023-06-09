import React, {Component} from 'react';
import {
    TouchableOpacity, 
    ScrollView, 
    StyleSheet, 
    Dimensions,
    Image, 
    View,
    Modal,
    Text
} from 'react-native';
import ItemCamera from '../components/itemCamera';
import Note from '../components/note';
import { VLCPlayer } from 'react-native-vlc-media-player'

const windowWidth = Dimensions.get('window').width;
const width1 = windowWidth/2 -2;
const width2 = windowWidth -2;

export default class cameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RTSP1: '1', RTSP2: '2', RTSP3: '3',
      modalVisible: false,
      urlRTSP:'No_Link',
      name:''
    }
  }

  _onPressChangeCam = (rtsp) => {
    this.props.navigation.navigate('DsCam',{rtsp}) 
  }

  _onPressFullCame = (rtsp, nameFull) => {
    this.setState({modalVisible: true})
    this.setState({urlRTSP: rtsp})
    this.setState({name: nameFull})
  }

  render() {
    const { navigation } = this.props;
    const { RTSP1, RTSP2, RTSP3, modalVisible } = this.state;
    const Rtsp1 = this.props.navigation.getParam ( 'rtsp1', 'No_Name');
    const name1 = this.props.navigation.getParam ( 'camName1', 'No_Name');

    const Rtsp2 = this.props.navigation.getParam ( 'rtsp2', 'No_Name');
    const name2 = this.props.navigation.getParam ( 'camName2', 'No_Name');

    const Rtsp3 = this.props.navigation.getParam ( 'rtsp3', 'No_Name');
    const name3 = this.props.navigation.getParam ( 'camName3', 'No_Name');
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
                            onPress={() => this._onPressFullCame(Rtsp1, name1)}
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
                        <ItemCamera url = {Rtsp2} widthItem = {width2} navigation = {navigation}/>
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
                            onPress={() => this._onPressFullCame(Rtsp2, name2)}
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
                            onPress={() => this._onPressFullCame(Rtsp3, name3)}
                        >
                            <Image style = { styles.image } source={require('../images/fullscreen.png')} /> 
                        </TouchableOpacity>
                    </View>
                    {/* end button change, full*/}
                </View>
                <Modal
                    visible={modalVisible}
                    supportedOrientations={['landscape-right']}
                    transparent={true}
                    onRequestClose={() => { this.setState({modalVisible: !modalVisible}); }}
                >
                    <View style={{flex: 1, justifyContent: 'center', backgroundColor:'black', height:'100%', width:'100%'}}>
                        <View style={{width: '100%', position: "absolute", top: 20, zIndex: 10, flexDirection:'row'}}>
                            <View style={{flex: 1}}/>
                            <View style={{alignItems:'center', justifyContent:'center', flex: 8}}>
                                <Text style={{color: 'white', fontSize: 18}}>{this.state.name}</Text>
                            </View>
                            <View style={{flex: 1, paddingRight: 20}}> 
                                <TouchableOpacity
                                    style={{width: 30,height: 30, backgroundColor:'white', borderRadius: 15, alignItems:'center', justifyContent:'center'}}
                                    onPress={() => { this.setState({modalVisible: !modalVisible})}}
                                >
                                    <Text style={{fontSize: 18}}>X</Text>
                                </TouchableOpacity>
                            </View> 
                            
                        </View>
                        
                        <View style={{height: '100%', width: '100%',justifyContent: 'center', backgroundColor:'black'}}>
                            <VLCPlayer
                                style={{height:'100%', width: '100%'}}
                                videoAspectRatio="16:9"
                                autoplay={true}
                                source={{ uri: this.state.urlRTSP }}
                            />
                        </View>

                    </View>
                </Modal>
                
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