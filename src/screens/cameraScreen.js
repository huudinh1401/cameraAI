import React, {Component} from 'react';
import {
    TouchableOpacity, 
    ScrollView, 
    StyleSheet, 
    Dimensions,
    Image, 
    View
} from 'react-native';
import { VLCPlayer } from 'react-native-vlc-media-player';
import ItemCam from '../components/itemCam';
import Note from '../components/note';


const windowWidth = Dimensions.get('window').width;
const width1 = windowWidth/2 -2;
const width2 = windowWidth -2;
const url1 = 'rtsp://admin:Admin123456@hoaphu.zapto.org:555/Streaming/channels/101'; 

export default class cameraScreen extends React.Component {
    
  render() {
    return (
        <View style = { styles.mainView }>
            <ScrollView style = { styles.Scroll }>
                <View style = { styles.viewCam }>

                    <View style={{flexDirection: 'row',flex: 1}}>
                        {/* Cam 1*/}
                        <ItemCam url = { url1 } widthItem = {width1}/>

                        {/* Cam 2*/}
                        <ItemCam/>
                    </View>

                    <View style={{flexDirection: 'row',flex: 1}}>
                        {/* cam 3 */}
                        <ItemCam/>

                        {/* Cam 4*/}
                        <ItemCam/>
                    </View>

                    {/* Cam 5*/}
                    <View style={{flexDirection: 'row',flex: 1}}>

                        {/* Cam 5*/}
                        <ItemCam url = { url1 } widthItem = {width2}/>
                    </View>
                    {/*end row 3*/}
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