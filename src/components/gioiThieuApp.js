import React, {useState, useEffect} from 'react';
import { 
    StyleSheet, 
    View,
    Image, 
    Text,
    StatusBar,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { Icon } from 'react-native-elements';

const GioiThieu = ({navigation}) => {
  const [numberNoti, setNumberNoti] = useState('');
  const [dataNoti, setDataNoti] = useState([]);

  useEffect(() => {
    
  }, []);  
    return (
      <View style = { styles.container}>
        <View style={{width: '100%', height: 45, justifyContent:'center', alignItems:'center', marginTop: -10}}>
            <Text style={{color: '#990000', fontWeight:'bold', fontSize: 16}}>Giới thiệu & hướng dẫn</Text>
        </View>

        <View style={{width: '90%', marginTop: 10}}>
            <Text style={{color: 'black', fontSize: 14, textAlign: 'justify', lineHeight: 22}}>     Camera - AI là ứng dụng
                quan sát, quản lý, theo dõi an ninh dựa trên công nghệ AI chụp ảnh nhận diện 
                các đối tượng trong phạm vi quan sát của Camera. Công nghệ nhận diện AI giúp các cơ quan chức năng giám sát, 
                phát hiện đối tượng vi phạm để có hướng xử lý theo đúng quy định của Pháp Luật. Giảm nguồn nhân lực 
                tuần tra trên đường, phát hiện đối tượng vi phạm và thông báo trực tiếp trên hệ thống một cách nhanh chóng
                và chính xác.
            </Text>
        </View>
        <View style={{width: '90%', marginTop: 10}}>
            <Text style={{color: 'black', fontSize: 14, textAlign: 'justify', lineHeight: 22}}>     Camera - AI sử dụng kỹ thuật 
                chụp ảnh đối tượng, lưu về hệ thống dữ liệu. Cơ quan quản lý có thể tìm kiếm, lọc thông tin chi tiết của đối tượng,
                xem hình ảnh vi phạm. Đồng thời, cơ quan quản lý có thể thêm đối tượng vào danh sách cảnh báo để hệ thống ghi nhận
                và thông báo khi phát hiện đối tượng trong phạm vi các Camera được quản lý.
            </Text>
        </View>
        <View style={{width: '90%', marginTop: 10}}>
            <Text style={{color: 'black', fontSize: 14, textAlign: 'justify', lineHeight: 22}}>     Công Ty TNHH Nguyên Luân
                rất hân hạnh được đóng góp công sức của mình vào sự phát triển chung của tỉnh nhà.
            </Text>
        </View>
        <View style={{width: '90%', marginTop: 20}}>
            <Text style={{color: 'black', fontSize: 14, right:0, position:'absolute'}}>Trân trọng!</Text>
        </View>
         
      </View>
    );
}

export default GioiThieu;

const styles = StyleSheet.create({
  container: {
    width:'98%',
    height: '85%',
    alignItems:'center',
  }
});