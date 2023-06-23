import React, {useState, useEffect} from 'react';
import { 
    StyleSheet, 
    View,
    Image, 
    Text,
    StatusBar,
    Platform,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import FooterInfo from '../components/footerInfo';

const urlNoti = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/dsThongBao.php';
const InfoScreen = ({navigation}) => {
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
    return (
      <View style = { styles.mainView }>
        <StatusBar barStyle={'light-content'}/>
        <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 20, marginTop: Platform.OS === 'ios' ? 60 : 10}}>
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
          <View style = {{ alignItems: 'center', marginTop: 20}}>
              <Image style = { styles.logo } source={require('../images/NL.jpg')} /> 
          </View>
          
          {/* Danh sach thoong tin ung dung */}
          <View style = { styles.info }>
              <TouchableOpacity style = { styles.miniInfoTop } onPress={() => console.log('Gioi thieu va huong dan')}>
                  <Image style = { styles.image } source={require('../images/book.png')} />  
                  <Text style = { styles.text }>Giới thiệu và hướng dẫn</Text>
                  <View style={{ marginVertical: 7, position: 'absolute', right: 5}}>
                      <Icon
                          name='chevron-forward'
                          type='ionicon' />
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style = { styles.miniInfo } onPress={() => console.log('Xep hang ung dung')}>
                  <Image style = { styles.image } source={require('../images/star.png')} />  
                  <Text style = { styles.text }>Xếp hạng ứng dụng</Text>
                  <View style={{ marginVertical: 7, position: 'absolute', right: 5}}>
                      <Icon
                          name='chevron-forward'
                          type='ionicon' />
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style = { styles.miniInfo } onPress={() => console.log('gop y ung dung')}>
                  <Image style = { styles.image } source={require('../images/note.png')} />  
                  <Text style = { styles.text }>Góp ý ứng dụng</Text>
                  <View style={{ marginVertical: 7, position: 'absolute', right: 5}}>
                      <Icon
                          name='chevron-forward'
                          type='ionicon' />
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style = { styles.miniInfo } onPress={() => console.log('Lien he ho tro')}>
                  <Image style = { styles.image } source={require('../images/phone.png')} />  
                  <Text style = { styles.text }>Hỗ trợ:    0868.686.868 - 0686.868.686</Text>
              </TouchableOpacity>

              <TouchableOpacity style = { styles.miniInfo } onPress={() => navigation.popToTop()}>
                  <Image style = { styles.image } source={require('../images/logout.png')} />  
                  <Text style = { styles.text }>Đăng xuất</Text>
              </TouchableOpacity>

              <View style = { styles.miniInfo }>
                  <Image style = { styles.image } source={require('../images/info.png')} />  
                  <Text style = { styles.text }>Phiên bản</Text>
                  <View style={{ marginVertical: 7, position: 'absolute', right: 5}}>
                      <Text>version: 1.0.0 - 14 (New)</Text>
                  </View>
              </View>
          </View>
          <View style = {{flex: 1}}>
            <Text style = { styles.textFooter }>© Bản quyền ứng dụng</Text>
            <Text style = { styles.textFooterAdd }>Công Ty TNHH Nguyên Luân</Text>
          </View>
        </View>
        <FooterInfo
          navigation = {navigation}
          numberNoti = {numberNoti}
        />
      </View>
    );
}

export default InfoScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green'
  },
  logo: {
    marginTop: 10,
    width: 100,
    height: 100,
  },
  info: {
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 10,
  },
  miniInfoTop: {
    paddingHorizontal: 8,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  miniInfo: {
    paddingHorizontal: 8,
    paddingVertical: 15,
    flexDirection: 'row',
    borderTopColor: 'grey',
    borderTopWidth: 0.3,
    alignItems:'center'
  },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    color: 'black',
    paddingLeft: 10,
  },
  textFooter: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
    color: 'grey',
  },
  textFooterAdd: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'grey',
  },
  
});