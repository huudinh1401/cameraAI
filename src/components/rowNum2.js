import React, {Component} from 'react';
import { 
  Text, 
  StyleSheet, 
  View, 
  Image,
  TouchableOpacity,
} from 'react-native';

export default class RowNum2 extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style = { styles.row }>

        <TouchableOpacity 
          style = { styles.col }
          onPress={() => navigation.navigate('DsSuKien')}
        >
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/error.png')} />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style = { styles.text } >Sự kiện</Text>
          </View>
        </TouchableOpacity>
          
        <TouchableOpacity   
          style = { styles.col }
          onPress={() => navigation.navigate('Map')}
        >
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/map.png')} />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style = { styles.text } >Bản đồ </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style = { styles.col }
          onPress={() => navigation.navigate('Black')}
        >
          <View style = { styles.bgIcon }>
            <Image style = { styles.icon } source={require('../images/note.png')} />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style = { styles.text } >Black List</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 120,
    },
    col: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,    
    },
    bgIcon: {
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#FF0000',
      borderRadius: 20,
      width: 60,
      height: 60,      
    },
    icon: {
      width: 40,
      height: 40,      
    },
    text: {
      fontSize: 13,
      fontStyle: 'italic',
      color: 'purple',
    },
});