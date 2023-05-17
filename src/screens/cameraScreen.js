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
  
    
  render() {
    return (
        <View style = { styles.mainView }>
            <ScrollView style = { styles.Scroll }>
                <View style = { styles.viewCam }>

                    <View style={{flexDirection: 'row',flex: 1}}>
                        {/* Cam 1*/}
                        <ItemCamera url = { url } widthItem = {width1}/>

                        {/* Cam 2*/}
                        <ItemCamera url = { '' } widthItem = {width1}/>
                    </View>

                    {/* Cam 3*/}
                    <View style={{flexDirection: 'row',flex: 1}}>
                        <ItemCamera url = { url } widthItem = {width2}/>
                    </View>

                    {/* Cam 4 */}
                    <View style={{flexDirection: 'row',flex: 1}}>
                        <ItemCamera url = {''} widthItem = {width2}/>
                    </View>

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