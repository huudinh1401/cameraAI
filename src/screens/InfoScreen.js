import React, {useState, useEffect} from 'react';
import { 
    StyleSheet, 
    View, Image, 
    Text, StatusBar,
    Modal, TouchableOpacity,
    SafeAreaView, Linking,
} from 'react-native';
import { Icon } from 'react-native-elements';
import FooterInfo from '../components/footerInfo';
import GioiThieu from '../components/gioiThieuApp';

const urlNoti = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/dsThongBao.php';
const InfoScreen = ({navigation}) => {
  const [numberNoti, setNumberNoti] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
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
    return (
      <SafeAreaView style = {{flex: 1, backgroundColor: 'orange'}}>
        <StatusBar barStyle={'light-content'}/>
        <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 10, marginTop: 5}}>
            <TouchableOpacity
                style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                onPress={()=>navigation.goBack()}
            >
                <Image style = {{width:30, height:30}} source={require('../images/back_white.png')}></Image>
            </TouchableOpacity>
            <View style={{flex: 7, justifyContent: 'center', alignItems:'center'}}>
                <Text style = {{color: 'white', fontSize: 20, textAlign: 'center', fontWeight:'bold'}}>Thông tin ứng dụng</Text>
            </View>
            <TouchableOpacity
                style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                onPress={()=>navigation.navigate('Home')}
            >
                <Image style = {{width:35, height: 35}} source={require('../images/home.png')}></Image>
            </TouchableOpacity>
        </View>
        <View style = {{flex: 1, backgroundColor:'whitesmoke'}}>
          <View style = {{ alignItems: 'center', marginTop: 10}}>
              <Image style = {{marginTop: 5, width: 80, height: 80}} source={require('../images/NL.jpg')} /> 
          </View>
          
          {/* Danh sach thoong tin ung dung */}
          <View style = { styles.info }>
              <TouchableOpacity style = { styles.miniInfoTop } onPress={() => setModalVisible(true)}>
                  <Image style = { styles.image } source={require('../images/book.png')} />  
                  <Text style = { styles.text }>Giới thiệu và hướng dẫn</Text>
                  <View style={{ marginVertical: 7, position: 'absolute', right: 5}}>
                      <Icon name='chevron-forward' type='ionicon' />
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style = { styles.miniInfo } onPress={() => console.log('Xep hang ung dung')}>
                  <Image style = { styles.image } source={require('../images/star.png')} />  
                  <Text style = { styles.text }>Xếp hạng ứng dụng</Text>
                  <View style={{ marginVertical: 7, position: 'absolute', right: 5}}>
                      <Icon name='chevron-forward' type='ionicon' />
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style = { styles.miniInfo } onPress={() => console.log('gop y ung dung')}>
                  <Image style = { styles.image } source={require('../images/note.png')} />  
                  <Text style = { styles.text }>Góp ý ứng dụng</Text>
                  <View style={{ marginVertical: 7, position: 'absolute', right: 5}}>
                      <Icon name='chevron-forward' type='ionicon' />
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style = { styles.miniInfo } onPress={()=>{Linking.openSettings();}}>
                  <Image style = { styles.image } source={require('../images/noti.png')} />  
                  <Text style = { styles.text }>Cài đặt thông báo</Text>
              </TouchableOpacity>

              <TouchableOpacity style = { styles.miniInfo } onPress={()=>{Linking.openURL('tel:0986868686');}}>
                  <Image style = { styles.image } source={require('../images/phone.png')} />  
                  <Text style = { styles.text }>Hỗ trợ:   098 6868 686</Text>
              </TouchableOpacity>

              <TouchableOpacity style = { styles.miniInfo } onPress={() => navigation.popToTop()}>
                  <Image style = { styles.image } source={require('../images/logout.png')} />  
                  <Text style = { styles.text }>Đăng xuất</Text>
              </TouchableOpacity>

              <View style = { styles.miniInfo }>
                  <Image style = { styles.image } source={require('../images/info.png')} />  
                  <Text style = { styles.text }>Phiên bản</Text>
                  <View style={{ marginVertical: 7, position: 'absolute', right: 10}}>
                      <Text style={{color:'gray'}}>version: 1.0.0 - 2023</Text>
                  </View>
              </View>
          </View>
          <View style = {{flex: 1}}>
            <Text style = {{marginTop: 10, textAlign: 'center', fontSize: 12, color: 'gray',}}>© Bản quyền ứng dụng thuộc</Text>
            <Text style = {{marginTop: 3, textAlign: 'center', fontSize: 14, color: 'gray'}}>Công Ty TNHH Nguyên Luân</Text>
          </View>
          
        </View>
        <View style={{position:'absolute', bottom: 0, left: 0, right: 0}}>
          <FooterInfo navigation = {navigation} numberNoti = {numberNoti} />
        </View>

        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)} > 
          <StatusBar barStyle={'dark-content'}/>
          <View style={{ width: '100%', height:'100%', backgroundColor: 'beige', justifyContent:'center', alignItems:'center',}}>
            <GioiThieu/>
            <TouchableOpacity 
              style = {{justifyContent:'center', alignItems:'center', position:'absolute', bottom: 50, left: 150, right: 150, backgroundColor:'#990000', height: 40, borderRadius:10}} 
              onPress={() => setModalVisible(false)}
            >
              <Text style = {{ color:'white', fontSize: 14 }}>Quay lại</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    );
}

export default InfoScreen;

const styles = StyleSheet.create({
  info: {
    marginTop: 15, marginHorizontal: 15, backgroundColor: 'white', flexDirection: 'column', borderRadius: 10,
  },
  miniInfoTop: {
    paddingHorizontal: 8, paddingVertical: 15, flexDirection: 'row', alignItems: 'center'
  },
  miniInfo: {
    paddingHorizontal: 8, paddingVertical: 15, flexDirection: 'row', borderTopColor: 'grey', borderTopWidth: 0.3, alignItems:'center'
  },
  image: {
     width: 20, height: 20, 
  },
  text: { 
    color: 'black', paddingLeft: 10
  },
  
});