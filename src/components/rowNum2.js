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
          <View style={{paddingVertical: 5}}>
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
          <View style={{paddingVertical: 5}}>
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
          <View style={{paddingVertical: 5}}>
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
        margin: 15,
        marginHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#00000',
        shadowOffset:{width: 0, height:5},
        shadowRadius: 2,
        shadowOpacity: 0.3,
        elevation: 10,
    },
    bgIcon: {
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#FF0000',
      borderRadius: 20,
      width: 55,
      height: 55,
      marginTop: 5      
    },
    icon: {
      width: 30,
      height: 30,      
    },
    text: {
      fontSize: 13,
      fontStyle: 'italic',
      color: 'purple',
    },
});