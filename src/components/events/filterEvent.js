import React, {useState, useEffect} from 'react';

import {
  SafeAreaView, Text, StyleSheet, Image,
  View, FlatList, TextInput, TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

import TitleEvent from './titileEvent';
import AllEvent from './allEvent';

const urlCam = 'http://192.168.1.47/dataCamera/dsCam.php';
const urlEvent = 'http://192.168.1.47/dataCamera/listEventAll.php';
const arrLoaiSK = [
    {key: '1', tensk: 'Nhận diện khuôn mặt'},
    {key: '2', tensk: 'Nhận diện biển số xe'},
    {key: '3', tensk: 'Nhận diện đám đông'}
]
const arrPhanLoai = [
    {key: '0', phanLoai: 'Thông thường'},
    {key: '1', phanLoai: 'Cảnh báo'}
]

const FilterEvent = ({navigation}) => {
    const [searchCam, setSearchCam] = useState('');
    const [showSearchCam, setShowSearchCam] = useState(false);

    const [searchLoaiSK, setSearchLoaiSK] = useState('');
    const [showSearchLoaiSK, setShowSearchLoaiSK] = useState(false);

    const [searchPhanLoai, setSearchPhanLoai] = useState('');
    const [idPhanLoaiSearch, setIdPhanLoaiSearch] = useState('');
    const [showSearchPhanLoai, setShowSearchPhanLoai] = useState(false);

    const [searchTime, setSearchTime] = useState('');

    const [showComFilter, setShowComFilter] = useState(false);
    
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const [allEvent, setAllEvent] = useState([]);
    const [masterAllEvent, setMasterAllEvent] = useState([]);

    useEffect(() => {
        fetch(urlCam)
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            })
            .catch((error) => {console.error(error)} );

        fetch(urlEvent)
            .then((response) => response.json())
            .then((responseJson) => {
                setAllEvent(responseJson);
                setMasterAllEvent(responseJson);
            })
            .catch((error) => {console.error(error)} );
        //searchDoiTuong()
    }, []);

    const searchCamera = (text) => {
        if (text) {
            const newData = masterDataSource.filter(
                function (item) {
                const itemData = item.CamName
                    ? item.CamName.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearchCam(text);
            setShowSearchCam(true);
            setShowSearchLoaiSK(false);
            setShowSearchPhanLoai(false);
            setShowComFilter(false)
        } else {
            setFilteredDataSource(masterDataSource);
            setSearchCam(text);
            setShowSearchCam(true);
            setShowSearchLoaiSK(false);
            setShowSearchPhanLoai(false);
            setShowComFilter(false)
        }
    };

    const searchDoiTuong = () => {
        if (searchCam !== '') {
            const newData = allEvent.filter(
                function (item) {
                    const itemData = item.Camera
                    const textData = searchCam;
                    return itemData.indexOf(textData) > -1;
            });
                setAllEvent(newData);
        }

        if (searchLoaiSK !=='') {
            const newData = allEvent.filter(
                function (item) {
                    const itemData = item.LoaiSuKien
                    const textData = searchLoaiSK;
                    return itemData.indexOf(textData) > -1;
            });
                setAllEvent(newData);
        }

        if (searchPhanLoai !=='') {
            const newData = allEvent.filter(
                function (item) {
                    const itemData = item.CanhBao
                    const textData = idPhanLoaiSearch;
                    return itemData.indexOf(textData) > -1;
            });
                setAllEvent(newData);
        }
        if (searchTime !== '') {
            const newData = allEvent.filter(
                function (item) {
                    const itemData = item.ThoiGian
                    const textData = searchTime;
                    return itemData.indexOf(textData) > -1;
            });
            setAllEvent(newData);
        }
        else setAllEvent('o')
        
    };

    
    const ItemView = ({item}) => {
        return (
            <View style={{flexDirection:'row', }}>
                <View style={{flex:2.5}}/>
                <TouchableOpacity
                    style={{flex:7.5, paddingLeft: 20, backgroundColor: '#EEEEEE', marginLeft: 3, borderBottomWidth: 0.5, borderColor: 'gray'}}
                    onPress={() => _onPressGetCamName(item.CamName)}
                >
                <View style ={{height: 45, justifyContent: 'center', }}>
                    <Text style = {{color: 'blue', fontSize: 14}}> {item.CamName} </Text>
                </View>
                </TouchableOpacity> 
            </View>
        );
    };
    const ItemViewLoaiSK = ({item}) => {
        return (
            <View style={{flexDirection:'row', }}>
                <View style={{flex:2.5}}/>
                <TouchableOpacity
                    style={{flex:7.5, paddingLeft: 20, backgroundColor: '#EEEEEE', marginLeft: 3, borderBottomWidth: 0.5, borderColor: 'gray'}}
                    onPress={() => _onPressGetLoaiSK(item.tensk)}
                >
                <View style ={{height: 45, justifyContent: 'center', }}>
                    <Text style = {{color: 'blue', fontSize: 14}}> {item.tensk} </Text>
                </View>
                </TouchableOpacity> 
            </View>
        );
    };
    const ItemViewPhanLoai = ({item}) => {
        return (
            <View style={{flexDirection:'row'}}>
                <View style={{flex:2.5}}/>
                <TouchableOpacity
                    style={{flex:7.5, paddingLeft: 20, backgroundColor: '#EEEEEE', marginLeft: 3, borderBottomWidth: 0.5, borderColor: 'gray'}}
                    onPress={() => _onPressGetPhanLoai(item.phanLoai, item.key)}
                >
                <View style ={{height: 45, justifyContent: 'center', }}>
                    <Text style = {{color: 'blue', fontSize: 14}}> {item.phanLoai} </Text>
                </View>
                </TouchableOpacity> 
            </View>
        );
    };
    const ItemViewAllEvent = ({item}) => {
        return (
            <TouchableOpacity   
                onPress={() => _onPressChiTiet(item.id)}
            >
                <View style ={{ flexDirection: 'row', height: 45, justifyContent: 'center', backgroundColor: '#EEEEEE' }}>
                    <View style ={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1.8, justifyContent: 'center', padding: 2}}>
                            <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 14}}>{item.DoiTuong}</Text>
                        </View>
                        <View style={{flex: 3.5, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                            <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 14, textAlign: 'center'}}>{item.Camera}</Text>
                        </View>
                        <View style={{flex: 2.7, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                            <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 14, textAlign: 'center'}}>{item.ViTri}</Text>
                        </View>
                        <View style={{flex: 2, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                            <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 14, textAlign: 'center'}}>{item.ThoiGian}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity> 
        );
    };
    // onPress search theo Ten Camera
    const _onPressGetCamName = (name) =>{ 
        setSearchCam(name)
        setShowSearchCam(false)
        setShowComFilter(false)
    };
    
    // onPress search theo Loai Su Kien
    const _onPressGetLoaiSK = (name, id) =>{
        setSearchLoaiSK(name)
        setShowSearchLoaiSK(false)
    };
    const _onPressSetShowLoaiSK = () =>{
        setShowSearchCam(false)
        setShowSearchLoaiSK(!showSearchLoaiSK) 
        setShowSearchPhanLoai(false)
        setShowComFilter(false)
    };

    //// onPress search theo Phan Loai
    const _onPressGetPhanLoai = (name, id) =>{
        setIdPhanLoaiSearch(id)
        setSearchPhanLoai(name)
        setShowSearchPhanLoai(false)
        
    };
    const _onPressSetShowPhanLoai = () =>{
        setShowSearchCam(false)
        setShowSearchLoaiSK(false) 
        setShowSearchPhanLoai(!showSearchPhanLoai)
        setShowComFilter(false)
    };

    const _onPressLamMoi = () =>{ 
        setSearchCam('') 
        setSearchTime('')
        setSearchLoaiSK('')
        setSearchPhanLoai('')
        setIdPhanLoaiSearch('')
        setShowComFilter(false)
        setAllEvent(masterAllEvent)
    };

    const _onPressSearch = () =>{ 
        setShowComFilter(true)
        searchDoiTuong()
        
        //Alert.alert('TB','loai sk: '+ searchLoaiSK)
    };

    const ItemSeparatorView = () => {
        return ( <View  style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }} /> );
    };
    const _onPressChiTiet = (id) =>{ navigation.navigate('ChiTietDT',{id}) };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View >
            {/* InputText Camera */}
            <View style={{flexDirection:'row', marginHorizontal: 5}}>
                <View style={{justifyContent:'center', flex: 2.5}}>
                    <Text style={{fontSize: 16, color:'black'}}>Camera:</Text>
                </View>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchCamera(text)}
                    value={searchCam}
                    underlineColorAndroid="transparent"
                    placeholder="Nhập tên Camera..."
                    placeholderTextColor={'gray'}
                />
            </View>
            
            {/* InputText Thoi Gian*/}
            <View style={{flexDirection:'row', marginHorizontal: 5}}>
                <View style={{justifyContent:'center', flex: 2.5}}>
                    <Text style={{fontSize: 16, color:'black'}}>Thời gian:</Text>
                </View>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => setSearchTime(text)}
                    value={searchTime}
                    underlineColorAndroid="transparent"
                    placeholder="Nhập thời gian...(yyyy-mm-dd)"
                    placeholderTextColor={'gray'}
                />
            </View>

            {/* InputText Loai Su kien*/}
            <View style={{flexDirection:'row', marginHorizontal: 5}}>
                <View style={{justifyContent:'center', flex: 2.5}}>
                    <Text style={{fontSize: 16, color:'black'}}>Loại sự kiện:</Text>
                </View>
                <TouchableOpacity 
                    style={styles.textInputStyle}
                    onPress={()=>_onPressSetShowLoaiSK()}
                >
                    <TextInput
                        style={{justifyContent: 'center', alignItems: 'center', flex: 4}}
                        editable={false}
                        onChangeText={(text) => setSearchLoaiSK(text)}
                        value={searchLoaiSK}
                        underlineColorAndroid="transparent"
                    />
                    <View style={{flex: 1, justifyContent:'center'}}>
                        <Icon
                            name='chevron-down-outline'
                            type='ionicon'
                        />
                    </View>
                </TouchableOpacity>  
            </View>

            {/* InputText Phan Loai*/}
            <View style={{flexDirection:'row', marginHorizontal: 5}}>
                <View style={{justifyContent:'center', flex: 2.5}}>
                    <Text style={{fontSize: 16, color:'black'}}>Phân loại:</Text>
                </View>
                <TouchableOpacity
                    style={styles.textInputStyle}
                    onPress={()=>_onPressSetShowPhanLoai()}
                >
                    <TextInput
                        style={{justifyContent: 'center', alignItems: 'center', flex: 4}}
                        editable={false}
                        onChangeText={(text) => setSearchPhanLoai(text)}
                        value={searchPhanLoai}
                        underlineColorAndroid="transparent"
                    />
                    <View style={{flex: 1, justifyContent:'center'}}>
                        <Icon
                            name='chevron-down-outline'
                            type='ionicon'
                        />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Button Tim kiem va Lam Moi */}
            <View style={{flexDirection:'row', marginHorizontal: 5, justifyContent: 'space-between', marginTop: 10}}>
                <View style={{flex: 2.5}}/>
                <TouchableOpacity 
                    style={{flex:7.5/2, backgroundColor:'#00CCFF', height: 45, justifyContent:'center', marginHorizontal: 15, borderRadius: 10}}
                    onPress={() => _onPressSearch()}
                >
                    <Text style={{fontSize: 20, color:'white', textAlign: 'center'}}>Tìm kiếm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flex:7.5/2, backgroundColor:'#00CCFF', height: 45, justifyContent:'center', marginHorizontal: 10, borderRadius: 10}}
                    onPress={() => _onPressLamMoi()}
                >
                    <Text style={{fontSize: 20, color:'white', textAlign: 'center'}}>Làm mới</Text>
                </TouchableOpacity>
            </View>

            
            {
                showSearchCam ?
                <View style={{marginTop:-190, zIndex: 10, marginRight: 5}}>
                    <FlatList
                        data={filteredDataSource}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={ItemView}
                    />
                </View> : null
            }
            {
                showSearchLoaiSK ?
                <View style={{marginTop:-100, zIndex: 10, marginRight: 5}}>
                    <FlatList
                        data={arrLoaiSK}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={ItemViewLoaiSK}
                    />
                </View> : null
            }
            {
                showSearchPhanLoai ?
                <View style={{marginTop:-55, zIndex: 10, marginRight: 5}}>
                    <FlatList
                        data={arrPhanLoai}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={ItemViewPhanLoai}
                    />
                </View> : null
            }
            {
                showComFilter ?
                
                <View style={{marginTop: 10}}>
                    <TitleEvent col1={'Đối tượng '} col2={'Camera'} col3={'Vị trí'} col4={'Thời gian'}/>
                    <FlatList
                        data={allEvent}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemViewAllEvent}
                    />
                </View> 
                : 
                null
            }
                
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    textInputStyle: {
        flexDirection: 'row',
        flex:7.5,
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        marginTop: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
        justifyContent:'center'
    },
});

export default FilterEvent;