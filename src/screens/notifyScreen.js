import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text , FlatList, TouchableOpacity, Platform, Image, StatusBar, SafeAreaView} from 'react-native';
import FooterNotify from '../components/footerNotify';
import BouncingPreloader from 'react-native-bouncing-preloaders';

const icons = [
  "https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png",
  "https://www.shareicon.net/data/256x256/2016/05/04/759954_food_512x512.png",
];
const urlNoti = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/dsThongBao.php';

const NotifyScreen = ({navigation}) => {
  const [numberNoti, setNumberNoti] = useState('');
  const [dataNoti, setDataNoti] = useState([]);

  useEffect(() => {
    fetch(urlNoti)
    .then((response) => response.json())
    .then((responseJson) => {
      setDataNoti(responseJson)
      setNumberNoti(responseJson.length);
    })
    .catch((error) => {console.error(error)} );
  }, [dataNoti]); 
  
  const ItemViewNoti = ({item}) => {
    return (
      <TouchableOpacity onPress={() => _onPressHisItemBlack(item.DoiTuong)} >
        <View 
          style ={{
            height: 60, backgroundColor: 'beige', justifyContent:'center', paddingLeft: 20, margin: 2, borderRadius: 10, marginHorizontal: 7,
            shadowColor: 'black', shadowOffset:{width: 0, height: 5}, shadowRadius: 2, shadowOpacity: 0.3, elevation: 10,
        }}>

          <View style={{flexDirection: 'row', marginBottom: 0}}>
            <Text style={{color:'black', fontSize: 12}}>Camera </Text>
            <Text style={{color:'black', fontSize: 12, fontWeight:'bold'}}> {item.Camera} </Text>
            <Text style={{color:'black', fontSize: 12}}> đã phát hiện </Text>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 0}}>
            <Text style={{color:'black', fontSize: 12}}>Đối tượng </Text>
            <Text style={{color:'red', fontSize: 12, fontWeight:'bold'}}> {item.DoiTuong} </Text>
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Text style={{color:'black', fontSize: 12}}>Vào lúc </Text>
            <Text style={{color:'black', fontSize: 12, fontWeight:'bold'}}> {item.ThoiGian} </Text>
          </View>

        </View>
      </TouchableOpacity> 
    );
  };
  const _onPressHisItemBlack = (name) =>{ navigation.navigate('HisItemBlack',{name})  };
 
  return (
    <SafeAreaView style = { styles.mainView }>
      <StatusBar barStyle={'light-content'}/>
      <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 2, marginTop: 5}}>
          <TouchableOpacity
              style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
              onPress={()=>navigation.goBack()}
          >
              <Image style = {{width:30, height:30}} source={require('../images/back_white.png')}></Image>
          </TouchableOpacity>
          <View style={{flex: 7, justifyContent: 'center', alignItems:'center'}}>
              <Text style = {{color: 'white', fontSize: 20, textAlign: 'center', fontWeight:'bold'}}>Thông báo</Text>
          </View>
          <TouchableOpacity
              style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
              onPress={()=>navigation.navigate('Home')}
          >
              <Image style = {{width:35, height: 35}} source={require('../images/home.png')}></Image>
          </TouchableOpacity>
      </View>
      {
        numberNoti !== ''?
          <View style = { styles.notify }>
            <View 
              style={{
                width: '100%', height: 5, backgroundColor: 'green', marginBottom: 5,
                shadowColor: 'black', shadowOffset:{width: 2, height: 5}, shadowRadius: 2, shadowOpacity: 0.3,
            }}/>
            <FlatList
              data={dataNoti}
              keyExtractor={(item, index) => index.toString()}
              renderItem={ItemViewNoti}
            />
          </View>
        :
        <View style = {{flex: 1, alignItems: 'center', backgroundColor: 'white', marginBottom: -30}}>
          <Text style = {{paddingTop: 20, fontSize: 18, color:'blue'}}>Hiện tại không có thông báo!</Text>
          <View style = {{justifyContent: 'center', alignContent: 'center', flex: 1, paddingTop:50}}>
            <BouncingPreloader
              icons={icons}
              leftRotation="-350deg" rightRotation="100deg"
              leftDistance={-180}  rightDistance={-250}
              speed={1500} />
          </View>
        </View>
      }
      <View style={{position:'absolute', bottom: 0, left: 0, right: 0}}>
        <FooterNotify navigation = {navigation} numberNoti = {numberNoti} /> 
      </View>
        
    </SafeAreaView>
    
  );
}
export default NotifyScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'green',
    flex: 1,
  },
  notify:{
    width: '100%', height:'100%',
    backgroundColor:'#fff',
    marginBottom: -30,
    marginTop: 5,
  },
});