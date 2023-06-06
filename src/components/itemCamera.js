import React, {Component} from 'react';
import { 
    TouchableOpacity,  
    StyleSheet, 
    Dimensions,
    Image, 
    View
} from 'react-native';

import { VLCPlayer } from 'react-native-vlc-media-player'

const windowWidth = Dimensions.get('window').width;


export default class ItemCamera extends React.Component {
  render() {
    const { url, widthItem } = this.props;
    
    return (
        <View style={{flex: 1}}>
            <View style={{backgroundColor: 'grey', height: windowWidth/2+30, width: '100%', marginRight: 1, alignItems: 'center'}}>
                <VLCPlayer
                    //ref={'Cam1'}
                    style={{height:windowWidth/2+30, width: widthItem}}
                    videoAspectRatio="16:9"
                    autoplay={true}
                    //Orientation = {true}
                    source={{ uri: url }}
                />
            </View>  
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