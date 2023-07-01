import React, {Component} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
export default class Footer extends React.Component {
  render() {
    const { navigation, numberNoti } = this.props;
    return (
      <View 
        style={{
          backgroundColor: '#DDDDDD', height: 70, borderTopRightRadius: 10, borderTopLeftRadius: 10,
          shadowColor: 'black', shadowOffset:{width: 0, height: -2},
          shadowRadius: 2, shadowOpacity: 0.3, elevation: 10,
      }}>
      <View style = { styles.bgFooter }>
        <View style = { styles.iconfooter }>
            <TouchableOpacity onPress={() => navigation.navigate('Notify')}>
              {
                numberNoti !== 0 ?
                <View 
                  style={{
                    backgroundColor:'red', width: 18, height: 18, borderRadius: 9, zIndex: 10, 
                    position: "absolute", right: 7, top: -7, justifyContent: 'center', alignItems:'center'
                }}>
                    <Text style={{color:'white', fontSize: 12}}>{numberNoti}</Text>
                </View> : null
              }
              
              <Icon
                  name='notifications-outline'
                  type='ionicon' />
              <Text style = { styles.text }>Thông báo</Text>
            </TouchableOpacity>
        </View>

        {/* <View style = { styles.iconfooter }>
          <Icon
            name='heart-outline'
            type='ionicon' />
          <Text style = { styles.text }>abc</Text>
        </View> */}

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
    bgFooter: {
        height: 60,
        position: 'absolute',
        left: 0,
        right: 0,
        flexDirection: 'row',
        flex: 0.1,
        alignItems:'center',
        marginBottom: 20,
    },
    iconfooter: {
      alignItems: 'center',
      flex: 1,
    },
    iconfooterIn: {
      backgroundColor: 'white',
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
      color:'black'
    },
});