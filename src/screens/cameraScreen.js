import React, {Component} from 'react';
import {
    TouchableOpacity, 
    ScrollView, 
    Text, 
    StyleSheet, 
    Dimensions,
    Image, 
    View
} from 'react-native';
    
import { VLCPlayer } from 'react-native-vlc-media-player';
import { Icon } from 'react-native-elements';


const windowWidth = Dimensions.get('window').width;

export default class cameraScreen extends React.Component {
  render() {
    return (
        <View style = { styles.mainView }>
            <ScrollView style = { styles.Scroll }>
                <View style = { styles.viewCam }>

                    {/* Cam 1 Cam 2*/}
                    <View style={{flexDirection: 'row',flex: 1}}>

                        {/* Cam 1*/}
                        <View style={{flexDirection: 'column',flex: 1}}>
                            <View style={{backgroundColor: 'grey', height: windowWidth/2, marginRight: 1}}>
                            
                            <VLCPlayer
                                ref={'Cam1'}
                                style={{height:windowWidth/2, width: windowWidth/2 - 1}}
                                videoAspectRatio="16:9"
                                Orientation = {true}
                                source={{ uri: 'rtsp://admin:Admin123456@hoaphu.zapto.org:555/Streaming/channels/101'}}
                                
                             />
                            </View>

                            {/* button change, full*/}
                            <View style={{height: 40, marginRight: 1, flexDirection: 'row', flex: 1}}>
                                <TouchableOpacity
                                    style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 15}}
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

                        {/* Cam 2*/}
                        <View style={{flexDirection: 'column',flex: 1}}>
                            <View style={{backgroundColor: 'grey',  height: windowWidth/2, marginLeft: 1}}>
                                <VLCPlayer
                                    ref={'Cam2'}
                                    style={{height:windowWidth/2, width: windowWidth/2 - 1}}
                                    videoAspectRatio="16:9"
                                    source={{ uri: 'rtsp://admin:Admin123456@hoaphu.zapto.org:555/Streaming/channels/101'}}
                                />
                            </View>

                            {/* button change, full*/}
                            <View style={{height: 40, marginRight: 1, flexDirection: 'row', flex: 1}}>
                                <TouchableOpacity
                                    style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 15}}
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

                    </View>
                    {/*end row 1*/}

                    {/* Cam 3 Cam 4*/}
                    <View style={{flexDirection: 'row',flex: 1}}>

                        {/* cam 3 */}
                        <View style={{flexDirection: 'column',flex: 1}}>
                            <View style={{backgroundColor: 'grey', height: windowWidth/2, marginRight: 1}}>
                                <VLCPlayer
                                    ref={'Cam3'}
                                    style={{height:windowWidth/2, width: windowWidth/2 - 1}}
                                    videoAspectRatio="16:9"
                                    source={{ uri: 'rtsp://admin:Admin123456@hoaphu.zapto.org:555/Streaming/channels/101'}}
                                />
                            </View>

                            {/* button change, full*/}
                            <View style={{height: 40, marginRight: 1, flexDirection: 'row', flex: 1}}>
                                <TouchableOpacity
                                    style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 15}}
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

                        {/* Cam 4*/}
                        <View style={{flexDirection: 'column',flex: 1}}>
                            <View style={{backgroundColor: 'grey',  height: windowWidth/2, marginLeft: 1}}>
                                <VLCPlayer
                                    ref={'Cam4'}
                                    style={{height:windowWidth/2, width: windowWidth/2 - 1}}
                                    videoAspectRatio="16:9"
                                    source={{ uri: 'rtsp://admin:Admin123456@hoaphu.zapto.org:555/Streaming/channels/101'}}
                                />
                            </View>
                            
                            {/* button change, full*/}
                            <View style={{height: 40, marginRight: 1, flexDirection: 'row', flex: 1}}>
                                <TouchableOpacity
                                    style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 15}}
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

                    </View>
                    {/*end row 2*/}

                    {/* row 3*/}
                    <View style={{flexDirection: 'row',flex: 1}}>

                        {/* row 3 col 1*/}
                        <View style={{flexDirection: 'column',flex: 1}}>
                            <View style={{backgroundColor: 'grey', height: windowWidth/2, marginRight: 1}}>

                            </View>

                            {/* button change, full*/}
                            <View style={{height: 40, marginRight: 1, flexDirection: 'row', flex: 1}}>
                                <TouchableOpacity
                                    style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 15}}
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

                        {/* row 3 col 2*/}
                        <View style={{flexDirection: 'column',flex: 1}}>
                            <View style={{backgroundColor: 'grey',  height: windowWidth/2, marginLeft: 1}}>

                            </View>
                            
                            {/* button change, full*/}
                            <View style={{height: 40, marginRight: 1, flexDirection: 'row', flex: 1}}>
                                <TouchableOpacity
                                    style ={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 15}}
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

                        </View>
                        {/*end row 3*/}
                    </View>
                
                {/* Chu thich */}
                <View style = {{backgroundColor: "white", marginTop: 20, marginHorizontal: 1, marginBottom: 20}}>
                    <View style = {{padding: 10, flexDirection: 'column',}}>

                        <Text style = {{color: 'black', fontWeight: 'bold' }}>Chú thích:</Text>

                        <View style = {{flexDirection: 'row', marginTop: 10}}>
                            <Image style = { styles.image } source={require('../images/change.png')} />
                            <Text style = {{color: 'black', marginLeft: 10 }}> Dùng để đổi Camera đang xem thành một Camera khác.</Text>
                        </View>

                        <View style = {{flexDirection: 'row', marginTop: 10}}>
                            <Image style = { styles.image } source={require('../images/fullscreen.png')} />
                            <Text style = {{color: 'black', marginLeft: 10 }}> Dùng để xem toàn màn hình một Camera.</Text>
                        </View>

                    </View>
                </View>
                {/* End Chu thich */}
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