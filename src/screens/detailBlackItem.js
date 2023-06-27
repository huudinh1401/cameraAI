import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  Modal,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import {LinesLoader} from 'react-native-indicator';
import ImageZoom from 'react-native-image-pan-zoom';

//const urlBlackList = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/historyBlackList.php';
const urlBlackList = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/detailBlackList.php';
const widthImage=Dimensions.get('window').width;
const DetailBlackListItem = ({navigation, id}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [note, setNote] = useState('');
    const [doiTuong, setDoiTuong] = useState('');
    const [image, setImage] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [cam, setCam] = useState('');
    const [imageTongQuan, setImageTongQuan] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetch(urlBlackList,{
            method: "POST",
            headers:{
              "Accept":"application/json",
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              "id": id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
               
                setNote(responseJson[0].LoaiSuKien);
                setDoiTuong(responseJson[0].DoiTuong);
                setImage(responseJson[0].Hinh);
                setTime(responseJson[0].ThoiGian);
                setLocation(responseJson[0].ViTri);
                setCam(responseJson[0].Camera);
                setImageTongQuan(responseJson[0].HinhTongQuan);
                setIsLoading(false)
            })
            .catch((error) => { console.error(error); });
        }, []);
    
    return (
        <View style={styles.container}>
            {
                isLoading ? 
                <View style = {{alignItems: 'center', justifyContent: 'center', backgroundColor: 'beige', flex: 1}}>
                  <Image style = {{height: 150, width: 150, marginBottom: 10, marginTop:-300}} source={require('../images/cam_ko_nen.jpg')} />
                  <LinesLoader/>
                </View>
                :
                <View style={{backgroundColor: 'beige', flex: 1, marginBottom: -100}}>
                    <View style={{marginTop: 5}}>
                        <View style={{marginLeft: 5, flexDirection: 'row', alignItems: 'center'}}>
                            <View>
                                <Icon name={'image-outline'} type='ionicon' /> 
                            </View>
                            <View style={{marginLeft: 5}}>
                                <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>Hình ảnh:</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center', height: 130, justifyContent: 'center'}}>
                            {
                                image === '' ?
                                <Image 
                                    style = {{width: 250, height: 120, borderRadius: 10, resizeMode:"stretch"}} 
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
                    <View style = {{flexDirection: 'row', marginTop: 5, alignItems: 'center', marginLeft: 5}}>
                        <View>
                                <Icon name={'hourglass-outline'} type='ionicon' /> 
                        </View>
                        <View style={{ marginLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>Thời gian:</Text>
                        </View>
                        <View style={{marginLeft: 5, paddingLeft: 10}}>
                            <Text style={{color: 'blue', fontSize: 14}}>{time}</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 5, alignItems:'center', marginLeft: 5}}>
                        <View>
                                <Icon name={'videocam-outline'} type='ionicon' /> 
                        </View>
                        <View style={{ marginLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>Camera:</Text>
                        </View>
                        <View style={{marginLeft: 5, paddingLeft: 10}}>
                            <Text style={{color: 'blue', fontSize: 14}}>{cam}</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', marginTop: 5, alignItems: 'center', marginLeft: 5}}>
                        <View>
                            <Icon name={'location-outline'} type='ionicon' /> 
                        </View>
                        <View style={{ marginLeft: 5}}>
                            <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>Vị trí:</Text>
                        </View>
                        <View style={{marginLeft: 5, paddingLeft: 10}}>
                            <Text style={{color: 'blue', fontSize: 14}}>{location}</Text>
                        </View>
                    </View>
                    <View style = {{marginTop: 5}}>
                        <View style={{ marginLeft: 5, alignItems:'center', flexDirection: 'row'}}>
                            <View>
                                <Icon name={'image-outline'} type='ionicon' /> 
                            </View>
                            <View style={{ marginLeft: 5}}>
                                <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>Hình ảnh tổng quan:</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center', marginTop: 15}}>
                            {
                                imageTongQuan !== '' ? 
                                <TouchableOpacity style={{height: 180, width:'100%', alignItems:'center'}}
                                    onPress={() => setModalVisible(true)}
                                >
                                    <Image 
                                        style = {{width: '99%', height: 180, borderRadius: 10, resizeMode:'stretch'}} 
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
                                onRequestClose={() => { setModalVisible(!modalVisible); }}
                            >   
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black'}}>
                                    <TouchableOpacity
                                        style={{
                                            width: 30, height: 30, backgroundColor:'white', marginBottom: -150, 
                                            zIndex: 10, borderRadius: 15, alignItems:'center', justifyContent:'center'
                                        }}
                                        onPress={() => { setModalVisible(!modalVisible) }}
                                    >
                                        <Text style={{fontSize: 18, color:'black'}}>X</Text>
                                    </TouchableOpacity>
                                    <ImageZoom
                                        cropWidth={Dimensions.get('window').width}
                                        cropHeight={Dimensions.get('window').height}
                                        imageWidth={widthImage}
                                        imageHeight={260}
                                    >
                                        <Image 
                                            style = {{width: '100%', height: 260, borderRadius: 10, resizeMode:'stretch'}} 
                                            source={{uri: imageTongQuan}} 
                                        />
                                    </ImageZoom>
                                </View>
                            </Modal>
                            <View renderToHardwareTextureAndroid={true}>
                                <WebView
                                    style={{ width: '1%', height: 1, borderRadius: 10, resizeMode:'stretch' }}
                                    source={{ uri: imageTongQuan }}
                                />
                            </View>
                            
                        </View>
                        
                    </View>
                    <View style={{marginBottom: 300}}/>
                </View>
            }
        </View>
    );
};
export default DetailBlackListItem;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'green',

    },
    textTitle:{
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

