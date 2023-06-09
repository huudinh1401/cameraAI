import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
export default class FooterNotify extends React.Component {
  render() {
    const { navigation, numberNoti } = this.props;
    return (
      <View style ={styles.container}>
      <View style = { styles.bgFooter }>
        <View style = { styles.iconfooterChoose }>
        <View style = { styles.iconfooterIn }>
              <View 
                style={{
                  backgroundColor:'red', width: 18, height: 18, borderRadius: 9, zIndex: 10, 
                  position: "absolute", right: 17, top: 12, justifyContent: 'center', alignItems:'center'
              }}>
                  <Text style={{color:'white', fontSize: 12}}>{numberNoti}</Text>
              </View>
              <Icon
                reverse
                name='notifications-outline'
                type='ionicon'
                color='#993399'
              />
            </View>
          
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

        <View style = { styles.iconfooter }>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Icon
              name='information-circle-outline'
              type='ionicon' />
            <Text style = { styles.text }>Thông tin</Text>
          </TouchableOpacity>
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