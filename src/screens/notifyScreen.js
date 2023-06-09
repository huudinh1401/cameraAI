import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text , FlatList, TouchableOpacity} from 'react-native';
import FooterNotify from '../components/footerNotify';
import BouncingPreloader from 'react-native-bouncing-preloaders';

const icons = [
  "https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png",
  "https://www.shareicon.net/data/256x256/2016/05/04/759954_food_512x512.png",
];
const urlNoti = 'http://192.168.1.52/dataCamera/dsThongBao.php';

const notifyScreen = ({navigation}) => {
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
      <TouchableOpacity
          onPress={() => _onPressHisItemBlack(item.DoiTuong)}
      >
        <View style ={{height: 80, backgroundColor: 'beige', justifyContent:'center', paddingLeft: 20, margin: 3}}>

          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <Text style={{color:'black', fontSize: 16}}>Camera </Text>
            <Text style={{color:'blue', fontSize: 16, fontWeight:'bold'}}> {item.Camera} </Text>
            <Text style={{color:'black', fontSize: 16}}> đã phát hiện </Text>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 5}}>
            <Text style={{color:'black', fontSize: 16}}>Đối tượng </Text>
            <Text style={{color:'red', fontSize: 16, fontWeight:'bold'}}> {item.DoiTuong} </Text>
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Text style={{color:'black', fontSize: 16}}>Vào lúc </Text>
            <Text style={{color:'green', fontSize: 16, fontWeight:'bold'}}> {item.ThoiGian} </Text>
          </View>

        </View>
      </TouchableOpacity> 
    );
  };
  const _onPressHisItemBlack = (name) =>{ navigation.navigate('HisItemBlack',{name})  };
  const ItemSeparatorView = () => {
    return ( <View  style={{ height: 3, backgroundColor: '#C8C8C8' }} /> );
  };
  return (
    <View style = { styles.mainView }>
      {
        numberNoti !== ''?
        <View style = { styles.notify }>
          <FlatList
            data={dataNoti}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemViewNoti}
          />
        </View>
        :
        <View style = {{flex: 1, alignItems: 'center'}}>
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
        <FooterNotify navigation = {navigation} numberNoti = {numberNoti} /> 
    </View>
    
  );
}
export default notifyScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  notify:{
    width: '100%',
    flex: 1,
  },
});