import React, {useState, useEffect} from 'react';

import {
  SafeAreaView, Text, StyleSheet, Modal,
  View, FlatList, TextInput, Image,
  Dimensions, TouchableOpacity, Alert
} from 'react-native';

import { Icon } from 'react-native-elements';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { VLCPlayer } from 'react-native-vlc-media-player'

const windowWidth = Dimensions.get('window').width;

const MapCamera = ({navigation}) => {
    const [initLat, setInitLat] = useState(10.948917);
    const [initLong, setInitLong] = useState(108.108139);
    const [search, setSearch] = useState('');
    const [showSearchCam, setShowSearchCam] = useState(false);
    const [RTSP, setRTSP] = useState('');
    const [camName, setCamName] = useState('');
    const [dataDsCam, setDataDsCam] = useState([]);
    const [masterDsCam, setMasterDsCam] = useState([]);
    const [coordinate, setCoordinate] = useState([]); modalVisible
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        fetch('http://192.168.1.52/dataCamera/dsCam.php')
            .then((response) => response.json())
            .then((responseJson) => { setDataDsCam(responseJson); setMasterDsCam(responseJson); })
            .catch((error) => { console.error(error) });

        fetch('http://192.168.1.52/dataCamera/dsCoordinate.php')
            .then((response) => response.json())
            .then((responseJson) => {  setCoordinate(responseJson); })
            .catch((error) => { console.error(error) });

    }, []);
    const searchCamera = (text) => {
        if (text) {
            const newData = masterDsCam.filter(
                function (item) {
                    const itemData = item.CamName? item.CamName.toUpperCase(): ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
            });
            setDataDsCam(newData); setSearch(text); setShowSearchCam(true);
        } else { setDataDsCam(masterDsCam); setSearch(text); setShowSearchCam(false)}
    };
    
    const ItemView = ({item}) => {
        return (
            <View style={{flexDirection:'row'}}>
                <View style={{flex:0.5}}/>
                <TouchableOpacity
                    style={{flex: 9, paddingLeft: 25, backgroundColor: 'rgba(238, 238, 238, 0.3)', marginLeft: 3, borderBottomWidth: 0.5, borderColor: 'gray'}}
                    onPress={() => _onPressGetCamName(item.CamName)}
                >
                    <View style ={{height: 45, justifyContent: 'center', }}>
                        <Text style = {{color: 'blue', fontSize: 14}}> {item.CamName} </Text>
                    </View>
                </TouchableOpacity> 
                <View style={{flex:0.5}}/>
            </View>
        );
    };
    const _onPressGetCamName = (name) =>{ 
        setSearch(name)
        setShowSearchCam(false)
        for(let i=0; i<coordinate.length; i++){
            if (coordinate[i].title===name){ 
                setInitLat(coordinate[i].latitude)
                setInitLong(coordinate[i].longitude)
            }
        }
    };

    const _onPressCam = (name) =>{ 
        setModalVisible(!modalVisible)
        for(let i=0; i<masterDsCam.length; i++){
            if (masterDsCam[i].CamName===name){ setRTSP(masterDsCam[i].RTSP) }
        }
        setCamName(name)
    };
    const _onCancelSearch = () =>{
        setShowSearchCam(false)
        setSearch('')
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', alignItems:'center'}}>
            <View style={styles.container} >
                <View style={{alignItems:'center', justifyContent: 'center', flex: 1, marginLeft: 10}}>
                    <Icon name='search-outline' type='ionicon' />
                </View>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchCamera(text)}
                    value={search}
                    autoCorrect={false}
                    autoCapitalize= 'none'
                    underlineColorAndroid="transparent"
                    placeholder="Nhập tên Camera cần tìm..."
                    placeholderTextColor={'gray'}
                />
                <View style={{alignItems:'center', justifyContent: 'center', flex: 1, marginRight: 10}}>
                    <TouchableOpacity
                        style={{width: 30,height: 30, backgroundColor:'gainsboro', borderRadius: 15, alignItems:'center', justifyContent:'center'}}
                        onPress={() => {_onCancelSearch()}}
                    >
                        <Text style={{fontSize: 18}}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                showSearchCam ?
                    <View style={{zIndex: 5,  position: "absolute", top: 50, width: windowWidth-10}}>
                        <FlatList
                            data={dataDsCam}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ItemView}
                        />
                    </View> : null
            }
            <MapView
                style={{height:'105%', width: '100%'}}
                provider={PROVIDER_GOOGLE}
                region={{
                    latitude: initLat, longitude: initLong,
                    latitudeDelta:0.03, longitudeDelta: 0.03,
                }}
            >
                <Marker 
                    coordinate={{latitude: 10.948927, longitude: 108.1079694}}
                    title='Công Ty TNHH Nguyên Luân'
                >
                    <Image source={require('../images/NL.jpg')} style={{height: 50, width:50 }} />
                </Marker>
                {coordinate.map((marker, index) => (
                    <Marker 
                        key={index}
                        coordinate={marker}
                        title={marker.title}
                        onPress={()=>_onPressCam(marker.title)}
                    >   
                        <Image source={require('../images/LogoCam.png')} style={{height: 30, width:30 }} />
                    </Marker>
                ))}
                
            </MapView>
            
            <Modal
                visible={modalVisible}
                supportedOrientations={['landscape-right']}
                transparent={true}
                onRequestClose={() => { setModalVisible(!modalVisible) }}
            >
                <View style={{flex: 1, justifyContent: 'center', backgroundColor:'black', height:'100%', width:'100%'}}>
                    <View style={{width: '100%', position: "absolute", top: 20, zIndex: 10, flexDirection:'row'}}>
                        <View style={{flex: 1}}/>
                        <View style={{alignItems:'center', justifyContent:'center', flex: 8}}>
                            <Text style={{color: 'white', fontSize: 18}}>{camName}</Text>
                        </View>
                        <View style={{flex: 1, paddingRight: 20}}> 
                            <TouchableOpacity
                                style={{width: 30,height: 30, backgroundColor:'white', borderRadius: 15, alignItems:'center', justifyContent:'center'}}
                                onPress={() => { setModalVisible(!modalVisible)}}
                            >
                                <Text style={{fontSize: 18}}>X</Text>
                            </TouchableOpacity>
                        </View> 
                        
                    </View>
                    
                    <View style={{height: '100%', width: '100%',justifyContent: 'center', backgroundColor:'black'}}>
                        <VLCPlayer
                            style={{height:'100%', width: '100%'}}
                            videoAspectRatio="16:9"
                            autoplay={true}
                            source={{ uri: RTSP }}
                        />
                    </View>

                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#009688',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        height: 45,
        alignItems:'center',
        zIndex: 5,
        width: windowWidth-20,
        position: "absolute", 
        top: 5
    },
    textInputStyle: {
        flex: 9,
        height: 40,
    },
});

export default MapCamera;