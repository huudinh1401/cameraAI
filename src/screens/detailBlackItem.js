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

const urlBlackList = 'http://192.168.1.52/dataCamera/historyBlackList.php';
const widthImage=Dimensions.get('window').width;

export default DetailBlackListItem = ({navigation}) => {
    const id = navigation.getParam ( 'id', 'No_Name');

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
        fetch(urlBlackList)
            .then((response) => response.json())
            .then((responseJson) => {
                for (let i = 0; i < responseJson.length; i++){
                    if (responseJson[i].id === id){
                        setNote(responseJson[i].LoaiSuKien);
                        setDoiTuong(responseJson[i].DoiTuong);
                        setImage(responseJson[i].Hinh);
                        setTime(responseJson[i].ThoiGian);
                        setLocation(responseJson[i].ViTri);
                        setCam(responseJson[i].Camera);
                        setImageTongQuan(responseJson[i].HinhTongQuan);
                    }
                }
                setIsLoading(false)
            })
            .catch((error) => { console.error(error); });
        }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 20}}>
                <TouchableOpacity
                    style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                    onPress={()=>navigation.goBack()}
                >
                    <Image style = {{width:30, height:30}} source={require('../images/back_white.png')}></Image>
                </TouchableOpacity>
                <View style={{flex: 7, justifyContent: 'center', alignItems:'center'}}>
                    <Text style = {{color: 'white', fontSize: 20, textAlign: 'center'}}>Chi tiết đối tượng nhận dạng</Text>
                </View>
                <TouchableOpacity
                    style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                    onPress={()=>navigation.navigate('Home')}
                >
                    <Image style = {{width:35, height: 35}} source={require('../images/home.png')}></Image>
                </TouchableOpacity>
            </View>
            {
                isLoading ? 
                <View style = {{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', flex: 1, marginBottom: -200}}>
                  <Image style = {{height: 150, width: 150, marginBottom: 30, marginTop:-200}} source={require('../images/cam_ko_nen.jpg')} />
                  <LinesLoader/>
                </View>
                :
                <ScrollView style={{backgroundColor: 'white', flex: 1, marginBottom: -300}}>
                    <View style={{alignItems: 'center', marginVertical: 15}}>
                        <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>{note}</Text>
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
                                    onPress={() => setModalVisible(true)}
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
                                onRequestClose={() => { setModalVisible(!modalVisible); }}
                            >   
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black'}}>
                                    <TouchableOpacity
                                        style={{
                                            width: 30, height: 30, backgroundColor:'white', marginBottom: -150, 
                                            zIndex: 10, borderRadius: 15, alignItems:'center', justifyContent:'center'
                                        }}
                                        onPress={() => { setModalVisible(!modalVisible); }}
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'green',
        paddingTop: 10

    },
    textTitle:{
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

