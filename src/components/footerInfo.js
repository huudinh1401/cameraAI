import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class FooterInfo extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      <View style = { styles.bgFooter }>
        <View style = { styles.iconfooter }>
            <TouchableOpacity onPress={() => navigation.navigate('Notify')}>
              <Icon
                  name='notifications-outline'
                  type='ionicon'
              />
              <Text style = { styles.text }>Thông báo</Text>
            </TouchableOpacity>
          
          
          
        </View>
        {/* <View style = { styles.iconfooter }>
          <Icon
            name='heart-outline'
            type='ionicon' />
          <Text style = { styles.text }>abc</Text>
        </View> */}

        <View style = { styles.iconfooter }>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon
                name='home-outline'
                type='ionicon' />
            <Text style = { styles.text }>Trang chủ</Text>
        </TouchableOpacity>
            
        </View>

        {/* <View style = { styles.iconfooter }>
          <Icon
            name='heart-outline'
            type='ionicon' />
          <Text style = { styles.text }>xyz</Text>
        </View> */}
        <View style = { styles.iconfooterChoose }>
            <View style = { styles.iconfooterIn }>
                <Icon
                    reverse
                    name='information-circle'
                    type='ionicon'
                    color='#993399' />
            </View>
        </View>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#DDDDDD', 
    height: 80, 
    borderTopRightRadius: 10, 
    borderTopLeftRadius: 10,

  },
    bgFooter: {
        backgroundColor: '#DDDDDD',
        height: 60,
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: 20,
    },
    iconfooter: {
      alignItems: 'center',
      flex: 1,
    },
    iconfooterIn: {
      backgroundColor: 'seashell',
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