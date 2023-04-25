import React, {Component} from 'react';
import { 
    TouchableOpacity,  
    StyleSheet, 
    Dimensions,
    Image, 
    View
} from 'react-native';
import { VLCPlayer } from 'react-native-vlc-media-player';

const windowWidth = Dimensions.get('window').width;


export default class ItemCam extends React.Component {
  render() {
    const { url, widthItem } = this.props;
    return (
        <View style={{flexDirection: 'column',flex: 1}}>
            <View style={{backgroundColor: 'grey', height: windowWidth/2, marginRight: 1}}>
                <VLCPlayer
                    ref={'Cam1'}
                    style={{height:windowWidth/2, width: widthItem}}
                    videoAspectRatio="16:9"
                    Orientation = {true}
                    source={{ uri: url }}
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

    );
  }
}

const styles = StyleSheet.create({
  
    image: {
        width: 20,
        height: 20,
      },
 
});