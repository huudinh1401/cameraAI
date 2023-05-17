import React, {Component} from 'react';
import { 
    StyleSheet, 
    View,
    Image, 
    Text, 
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import FooterInfo from '../components/footerInfo';

export default class infoScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style = { styles.mainView }>
        <View style = {{ alignItems: 'center'}}>
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

            <TouchableOpacity style = { styles.miniInfo } onPress={() => navigation.navigate('Login')}>
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
          <Text style = { styles.textFooter }>© Bản quyền thuộc Bộ phận IT - ABC</Text>
          <Text style = { styles.textFooterAdd }>Công Ty TNHH Nguyên Luân</Text>
        </View>

        <FooterInfo
          navigation = {navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
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
    fontSize: 12,
    color: 'grey',
  },
  
});