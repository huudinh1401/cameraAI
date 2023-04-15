import React, {Component} from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'

export default class Footer extends React.Component {
  render() {
    return (
      <View style = { styles.bgFooter }>
        <View style = { styles.iconfooter }>
          <Icon
            name='notifications-outline'
            type='ionicon' />
          <Text style = { styles.text }>Thông báo</Text>
        </View>

        <View style = { styles.iconfooter }>
          <Icon
            name='heart-outline'
            type='ionicon' />
          <Text style = { styles.text }>abc</Text>
        </View>

        <View style = { styles.iconfooterChoose }>
          <View style = { styles.iconfooterIn }>
          <Icon
                
                reverse
                name='home'
                type='ionicon'
                color='#993399' 
                onPress={() => console.log('hello')}/>
          </View>
            
        </View>

        <View style = { styles.iconfooter }>
          <Icon
            name='heart-outline'
            type='ionicon' />
          <Text style = { styles.text }>xyz</Text>
        </View>

        <View style = { styles.iconfooter }>
        <Icon
            name='settings-outline'
            type='ionicon' />
          <Text style = { styles.text }>Cài đặt</Text>
        </View>
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    bgFooter: {
        backgroundColor: '#DDDDDD',
        height: 60,
        position: 'absolute',
        bottom: -10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        flex: 0.1,
        alignItems:'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    iconfooter: {
      alignItems: 'center',
      flex: 1,
    },
    iconfooterIn: {
      backgroundColor: '#fff',
      alignItems: 'center',
      borderRadius: 35,
    },
    iconfooterChoose: {
      alignItems: 'center',
      marginBottom: 50,
      flex: 1,
    },

    text: {
      fontSize: 10,
    },
});