import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image, 
  Alert,
  ScrollView,
  Dimensions,
  Modal,
  TouchableOpacity
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import {LinesLoader} from 'react-native-indicator';
import ImageZoom from 'react-native-image-pan-zoom';

const url = 'http://192.168.1.30/dataCamera/listEventAll.php';
const widthImage=Dimensions.get('window').width;

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
            modalVisible: false
            
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
    const {modalVisible} = this.state;
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
                                <TouchableOpacity
                                    style={{height: 260, width:'100%', alignItems:'center'}}
                                    onPress={() => this.setState({modalVisible: true})}
                                >
                                    <Image 
                                        style = {{width: '99%', height: 250, borderRadius: 10, resizeMode:'stretch'}} 
                                        source={{uri: imageTongQuan}} 
                                    />
                                </TouchableOpacity>
                                : 
                                <Image 
                                    style = {{width: '96%', height: 250, borderRadius: 10, resizeMode:'stretch'}} 
                                    source={require('../images/noImage.jpeg')} 
                                />
                            }
                            <Modal
                                visible={modalVisible}
                                transparent={true}
                                onRequestClose={() => { this.setState({modalVisible: !modalVisible}); }}
                            >   
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black'}}>
                                    <TouchableOpacity
                                        style={{
                                            width: 30, height: 30, backgroundColor:'white', marginBottom: -150, 
                                            zIndex: 10, borderRadius: 15, alignItems:'center', justifyContent:'center'
                                        }}
                                        onPress={() => { this.setState({modalVisible: !modalVisible}); }}
                                    >
                                        <Text style={{fontSize: 18}}>X</Text>
                                    </TouchableOpacity>
                                    <ImageZoom
                                        cropWidth={Dimensions.get('window').width}
                                        cropHeight={Dimensions.get('window').height}
                                        imageWidth={widthImage}
                                        imageHeight={260}
                                    >
                                        <Image 
                                            style = {{width: '100%', height: 260, borderRadius: 10, resizeMode:'cover'}} 
                                            source={{uri: imageTongQuan}} 
                                        />
                                    </ImageZoom>
                                </View>
                            </Modal>
                            <WebView
                                style={{ width: '1%', height: 1, borderRadius: 10, resizeMode:'stretch' }}
                                source={{ uri: imageTongQuan }}
                            /> 
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
