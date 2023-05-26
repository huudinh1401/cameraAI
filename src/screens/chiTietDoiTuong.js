import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image, 
  Alert,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import {LinesLoader} from 'react-native-indicator';

const url = 'http://192.168.1.51/dataCamera/listEventAll.php';

export default class ChiTietDoiTuong extends React.Component {
    componentDidMount() {
        this.getChiTietDoiTuong()
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            arrEventAll:[],
            note:'', doiTuong: '', time: '', location:'',
            image:'', loaiSK:'', cam:'', imageTongQuan:'',
            alert: '',
        }
    }
    async getChiTietDoiTuong() {
        try {
            const response = await fetch(url);
            const json = await response.json();
            this.setState({ arrEventAll: json });
            const {arrEventAll} = this.state;
            const id = this.props.navigation.getParam ( 'id', 'No_Name');
            for (var i = 0; i < arrEventAll.length; i++){
                if (arrEventAll[i].id === id){
                    this.setState({note: arrEventAll[i].ChuY, doiTuong: arrEventAll[i].DoiTuong});
                    this.setState({image: arrEventAll[i].Hinh, loaiSK: arrEventAll[i].LoaiSuKien});
                    this.setState({time: arrEventAll[i].ThoiGian, location: arrEventAll[i].ViTri});
                    this.setState({cam: arrEventAll[i].Camera, imageTongQuan: arrEventAll[i].HinhTongQuan});
                    this.setState({alert: arrEventAll[i].CanhBao});
                    this.setState({isLoading: false});
                }
            }
        } catch (error) {Alert.alert('Lỗi!','Không có kết nối mạng...\nVui lòng thử lại!')} 
    }
  render() {
    const { navigation } = this.props;
    const {note, image, doiTuong, loaiSK, time, location, cam, imageTongQuan} = this.state;
    const colorText = this.state.alert == 0 ? 'green' : 'red';
    return (
        <View style={styles.container}> 
            {
                this.state.isLoading ? 
                <View style = {{alignItems: 'center', marginTop: 150}}>
                  <Image style = {{height: 150, width: 150, marginBottom: 30}} source={require('../images/cam_ko_nen.jpg')} />
                  <LinesLoader />
                </View>
                :
                <ScrollView >
                    <View style={{alignItems: 'center', marginVertical: 15}}>
                        <Text style={{color: colorText, fontSize: 20, fontWeight: 'bold'}}>{note}</Text>
                    </View>
                    <View style={{marginTop: 5}}>
                        <View style={{marginVertical: 10, marginLeft: 5, flexDirection: 'row', alignItems: 'center'}}>
                            <View>
                                <Icon name={'image-outline'} type='ionicon' /> 
                            </View>
                            <View style={{marginLeft: 5}}>
                                <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Hình ảnh:</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center', height: 165, justifyContent: 'center'}}>
                            {
                                image === '' ?
                                <Image 
                                    style = {{width: 250, height: 160, borderRadius: 10, resizeMode:"stretch"}} 
                                    source={require('../images/noImage.jpeg')} 
                                />
                                :
                                <Image 
                                    style = {{width: 370, height: 120, borderRadius: 10, resizeMode:"stretch"}} 
                                    source={{uri: image,}} 
                                />
                            }
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 20, marginLeft: 5, alignItems:'center'}}>
                        <View>
                            <Icon name={'man-outline'} type='ionicon' /> 
                        </View>
                        <View style={{marginLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Đối tượng:</Text>
                        </View>
                        <View style={{marginLeft: 5, paddingLeft: 10, }}>
                            <Text style={{color: 'blue', fontSize: 18}}>{doiTuong}</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 15, marginLeft: 5, alignItems:'center'}}>
                        <View>
                            <Icon name={'checkmark-done-outline'} type='ionicon' /> 
                        </View>
                        <View style={{ marginLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Loại sự kiện:</Text>
                        </View>
                        <View style={{marginLeft: 5, paddingLeft: 10}}>
                            <Text style={{color: 'blue', fontSize: 18}}>{loaiSK}</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 15, alignItems: 'center', marginLeft: 5}}>
                        <View>
                                <Icon name={'hourglass-outline'} type='ionicon' /> 
                        </View>
                        <View style={{ marginLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Thời gian:</Text>
                        </View>
                        <View style={{marginLeft: 5, paddingLeft: 10}}>
                            <Text style={{color: 'blue', fontSize: 18}}>{time}</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 15, alignItems:'center', marginLeft: 5}}>
                        <View>
                                <Icon name={'videocam-outline'} type='ionicon' /> 
                        </View>
                        <View style={{ marginLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Camera:</Text>
                        </View>
                        <View style={{marginLeft: 5, paddingLeft: 10}}>
                            <Text style={{color: 'blue', fontSize: 18}}>{cam}</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 15, alignItems: 'center', marginLeft: 5}}>
                        <View>
                            <Icon name={'location-outline'} type='ionicon' /> 
                        </View>
                        <View style={{ marginLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Vị trí:</Text>
                        </View>
                        <View style={{marginLeft: 5, paddingLeft: 10}}>
                            <Text style={{color: 'blue', fontSize: 18}}>{location}</Text>
                        </View>
                    </View>
                    <View style = {{marginTop: 20}}>
                        <View style={{ marginLeft: 5, alignItems:'center', flexDirection: 'row'}}>
                            <View>
                                <Icon name={'image-outline'} type='ionicon' /> 
                            </View>
                            <View style={{ marginLeft: 5}}>
                                <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Hình ảnh tổng quan:</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center', marginTop: 15}}>
                            {
                                imageTongQuan !== '' ? 
                                <Image 
                                    style = {{width: '95%', height: 200, borderRadius: 10, resizeMode:'stretch'}} 
                                    source={{uri: imageTongQuan,}} 
                                /> : 
                                <Image 
                                    style = {{width: '95%', height: 250, borderRadius: 10, resizeMode:'stretch'}} 
                                    source={require('../images/noImage.jpeg')} 
                                />
                            }
                            {/* <WebView
                                style={{ width: '1%', height: 1, borderRadius: 10, resizeMode:'stretch' }}
                                source={{ uri: imageTongQuan }}
                            />  */}
                        </View>
                        
                    </View>
                    <View style={{paddingBottom: 100}}/>
                </ScrollView>
            }
        
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'beige',
        margin: 10,
        borderRadius: 10,
        paddingTop: 10

    },
});
