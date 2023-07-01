import React, {useState, useEffect} from 'react';

import {
  SafeAreaView, Text, StyleSheet, StatusBar, Image,
  View, FlatList, TextInput, TouchableOpacity, ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements';
import {Calendar} from 'react-native-calendars';

import TitleEvent from './titileEvent';
import ChiTietDoiTuong from '../../screens/chiTietDoiTuong';

const urlCam = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/dsCam.php';
const urlEvent = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/filter.php';
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
    const [showDetail, setShowDetail] = useState(false);
    const [id, setId] = useState('');

    const [searchLoaiSK, setSearchLoaiSK] = useState('');
    const [showSearchLoaiSK, setShowSearchLoaiSK] = useState(false);

    const [searchPhanLoai, setSearchPhanLoai] = useState('');
    const [idPhanLoaiSearch, setIdPhanLoaiSearch] = useState('');
    const [showSearchPhanLoai, setShowSearchPhanLoai] = useState(false);

    const [searchTime, setSearchTime] = useState('');
    const [showSearchTime, setShowSearchTime] = useState(false);

    const [showComFilter, setShowComFilter] = useState(false);
    
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const [allEvent, setAllEvent] = useState([]);
    const [masterAllEvent, setMasterAllEvent] = useState([]);

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        setCurrentDate(year + '-' + month + '-' + date);
        getDataCamera()
        getDataAllEvent()
    }, []);

    // *** Fetch data danh sach Camnera
    const getDataCamera = () =>{
        fetch(urlCam)
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            }).catch((error) => {console.error(error)} );
    }

     // *** Fetch data danh sach Tat ca Event
    const getDataAllEvent = () =>{
        fetch(urlEvent)
            .then((response) => response.json())
            .then((responseJson) => {
                setAllEvent(responseJson);
                setMasterAllEvent(responseJson);
            }).catch((error) => {console.error(error)} );
    }
    const searchCamera = (text) => {
        if (text) {
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.CamName? item.CamName.toUpperCase(): ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearchCam(text);
            setShowSearchCam(true);
            setShowSearchLoaiSK(false);
            setShowSearchPhanLoai(false);
            setShowComFilter(false);
            setShowSearchTime(false);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearchCam(text);
            setShowSearchCam(false);
            setShowSearchLoaiSK(false);
            setShowSearchPhanLoai(false);
            setShowComFilter(false)
        }
    };

    const searchDoiTuong = () => {
        let i = [];
        // *** Loc danh sach theo 4 yeu cau
        if (searchCam && searchTime && searchLoaiSK && idPhanLoaiSearch) {
            i = masterAllEvent.filter(
                (e) => e.Camera.indexOf(searchCam) >-1 && e.ThoiGian.indexOf(searchTime)>-1 && e.LoaiSuKien === searchLoaiSK && e.CanhBao===idPhanLoaiSearch
            );
        }

        // *** Loc danh sach theo 3 yeu cau
        if (!searchCam && searchTime && searchLoaiSK && idPhanLoaiSearch) {
            i = masterAllEvent.filter(
                (e) => e.ThoiGian.indexOf(searchTime)>-1 && e.LoaiSuKien === searchLoaiSK && e.CanhBao===idPhanLoaiSearch
            );
        }
        if (searchCam && !searchTime && searchLoaiSK && idPhanLoaiSearch) {
            i = masterAllEvent.filter(
                (e) => e.Camera.indexOf(searchCam) >-1 && e.LoaiSuKien === searchLoaiSK && e.CanhBao===idPhanLoaiSearch
            );
        }
        if (searchCam && searchTime && !searchLoaiSK && idPhanLoaiSearch) {
            i = masterAllEvent.filter(
                (e) => e.Camera.indexOf(searchCam) >-1 && e.ThoiGian.indexOf(searchTime)>-1 && e.CanhBao===idPhanLoaiSearch
            );
        }
        if (searchCam && searchTime && searchLoaiSK && !idPhanLoaiSearch) {
            i = masterAllEvent.filter(
                (e) => e.Camera.indexOf(searchCam) >-1 && e.ThoiGian.indexOf(searchTime)>-1 && e.LoaiSuKien === searchLoaiSK 
            );
        }

        // *** Loc danh sach theo 2 yeu cau
        if (searchCam && searchTime && !searchLoaiSK && !idPhanLoaiSearch) {
            i = masterAllEvent.filter( (e) => e.Camera.indexOf(searchCam) >-1 && e.ThoiGian.indexOf(searchTime)>-1 );
        }
        if (searchCam && !searchTime && searchLoaiSK && !idPhanLoaiSearch) {
            i = masterAllEvent.filter( (e) => e.Camera.indexOf(searchCam) >-1 && e.LoaiSuKien === searchLoaiS );
        }
        if (searchCam && !searchTime && !searchLoaiSK && idPhanLoaiSearch) {
            i = masterAllEvent.filter( (e) => e.Camera.indexOf(searchCam) >-1 && e.CanhBao===idPhanLoaiSearch );
        }

        if (!searchCam && searchTime && searchLoaiSK && !idPhanLoaiSearch) {
            i = masterAllEvent.filter( (e) => e.ThoiGian.indexOf(searchTime)>-1 && e.LoaiSuKien === searchLoaiSK  );
        }
        if (!searchCam && searchTime && !searchLoaiSK && idPhanLoaiSearch) {
            i = masterAllEvent.filter( (e) => e.ThoiGian.indexOf(searchTime)>-1 && e.CanhBao===idPhanLoaiSearch );
        }
        
        if (!searchCam && !searchTime && searchLoaiSK && idPhanLoaiSearch) {
            i = masterAllEvent.filter( (e) => e.LoaiSuKien === searchLoaiSK  && e.CanhBao===idPhanLoaiSearch );
        }

        // *** Loc danh sach theo tung yeu cau
        if (searchCam && !searchTime && !searchLoaiSK && !idPhanLoaiSearch) {
            i = masterAllEvent.filter( (e) => e.Camera.indexOf(searchCam) >-1 );
        }
        if (!searchCam && searchTime && !searchLoaiSK && !idPhanLoaiSearch) {
            i = masterAllEvent.filter( (e) => e.ThoiGian.indexOf(searchTime) >-1 );
        }
        if (!searchCam && !searchTime && searchLoaiSK && !idPhanLoaiSearch) {
            i = masterAllEvent.filter( (e) => e.LoaiSuKien === searchLoaiSK );
        }
        if (!searchCam && !searchTime && !searchLoaiSK && idPhanLoaiSearch) {
            i = masterAllEvent.filter( (e) => e.CanhBao===idPhanLoaiSearch );
        }
        
        setAllEvent(i)
        
    };
    
    const ItemView = ({item}) => {
        return (
            <View style={{flexDirection:'row', }}>
                <View style={{flex:2.5}}/>
                <TouchableOpacity
                    style={{flex:7.5, paddingLeft: 20, backgroundColor: '#EEEEEE', marginLeft: 3, borderBottomWidth: 0.5, borderColor: 'gray'}}
                    onPress={() => _onPressGetCamName(item.CamName)}
                >
                    <View style ={{height: 40, justifyContent: 'center', }}>
                        <Text style = {{color: 'blue', fontSize: 12}}> {item.CamName} </Text>
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
                    style={{flex:7.5, paddingLeft: 20, backgroundColor: '#EEEEEE', marginLeft: 3, borderBottomWidth: 0.5, borderColor: 'gray', height: 40, justifyContent: 'center',}}
                    onPress={() => _onPressGetLoaiSK(item.tensk)}
                >
                    <Text style = {{color: 'blue', fontSize: 12}}> {item.tensk} </Text>
                </TouchableOpacity> 
            </View>
        );
    };
    const ItemViewPhanLoai = ({item}) => {
        return (
            <View style={{flexDirection:'row'}}>
                <View style={{flex:2.5}}/>
                <TouchableOpacity
                    style={{flex:7.5, paddingLeft: 20, backgroundColor: '#EEEEEE', marginLeft: 3, borderBottomWidth: 0.5, borderColor: 'gray', height: 40, justifyContent: 'center'}}
                    onPress={() => _onPressGetPhanLoai(item.phanLoai, item.key)}
                >
                    <Text style = {{color: 'blue', fontSize: 12}}> {item.phanLoai} </Text>
                </TouchableOpacity> 
            </View>
        );
    };
    const ItemViewAllEvent = ({item}) => {
        return (
            <View style={styles.itemFlat}>
                <TouchableOpacity onPress={() => _onPressChiTiet(item.id)}>
                    <View style={{justifyContent: 'center',}}>
                        <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 15, textAlign: 'center', fontWeight: 'bold', marginBottom: 5}}>{item.DoiTuong}</Text>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <Text style = {{color: 'black', fontSize: 13, textAlign: 'center', marginBottom: 5}}>{item.Camera}</Text>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <Text style = {{color: 'black', fontSize: 13, textAlign: 'center', marginBottom: 5}}>{item.ViTri}</Text>
                    </View>

                    <View style={{justifyContent: 'center'}}>
                        <Text style = {{color: 'black', fontSize: 13, textAlign: 'center', marginBottom: 5}}>{item.ThoiGian}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    // onPress search theo Ten Camera
    const _onPressGetCamName = (name) =>{ 
        setSearchCam(name)
        setShowSearchCam(false)
        setShowComFilter(false)
        setShowSearchTime(false)
    };

    // onPress search theo Time
    const _onPressGetTime = (name) =>{
        setSearchTime(name) 
        setShowSearchTime(false)
    };
    const _onPressSetShowTime = () =>{
        setShowSearchCam(false)
        setShowSearchTime(!showSearchTime)
        setShowSearchLoaiSK(false) 
        setShowSearchPhanLoai(false)
        setShowComFilter(false)
    }
    // onPress search theo Loai Su Kien
    const _onPressGetLoaiSK = (name) =>{
        setSearchLoaiSK(name)
        setShowSearchLoaiSK(false)
    };
    const _onPressSetShowLoaiSK = () =>{
        setShowSearchCam(false)
        setShowSearchTime(false)
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
        setShowSearchTime(false)
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
        setShowSearchCam(false)
        setAllEvent(masterAllEvent)
        getDataAllEvent()
    };

    const _onPressSearch = () =>{ 
        setShowComFilter(true)
        searchDoiTuong()
        setShowSearchCam(false)
        setShowSearchTime(false)
        setShowSearchLoaiSK(false)
        setShowSearchPhanLoai(false)
        setShowDetail(false)
    };
    const _onPressChiTiet = (id) =>{ 
        setShowDetail(true)
        setShowComFilter(false)
        setId(id)
    };
    const goBack = () =>{ 
        setShowDetail(false)
        setShowComFilter(true)
    };

    const disableButton = (searchCam ==='' && searchTime ==='' && searchLoaiSK ==='' && searchPhanLoai === '') ? true :  false;
    const colorbutton =  disableButton ? 'gray' : '#00CCFF';
    const isAllEvent = allEvent.length > 0 ? true : false;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'orange'}}>
        <StatusBar barStyle={'light-content'}/>
        <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 7, marginTop: 5}}>
            <TouchableOpacity
                style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                onPress={()=>navigation.goBack()}
            >
                <Image style = {{width:25, height:25}} source={require('../../images/back_white.png')}></Image>
            </TouchableOpacity>
            <View style={{flex: 7, justifyContent: 'center', alignItems:'center'}}>
                <Text style = {{color: 'white', fontSize: 18, textAlign: 'center'}}>Bộ lọc đối tượng</Text>
            </View>
            <TouchableOpacity
                style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                onPress={()=>navigation.navigate('Home')}
            >
                <Image style = {{width:25, height: 25}} source={require('../../images/home.png')}></Image>
            </TouchableOpacity>
        </View>
        
        {
            showDetail ?
            <View style={{marginTop: 10, height: '100%', backgroundColor: 'white',marginBottom:-100}}>
                <View  style={{width: 40, height: 40, justifyContent: 'center', alignItems:'center', position:'absolute', top: 10, right: 20, zIndex: 10}}>
                    <TouchableOpacity onPress={()=>goBack()}  >
                        <Image style = {{width:30, height:30}} source={require('../../images/x.png')}></Image>
                    </TouchableOpacity>
                </View>
                <ChiTietDoiTuong id={id}/>
            </View>
            :
            <View style={{flex: 1, backgroundColor: '#fff', marginBottom:-100}}>
                <View style={{alignItems: 'center', marginVertical: 5, backgroundColor: '#fff'}}>
                    <Text style={{fontSize: 15, color: 'red', fontWeight: 'bold'}}>Lưu ý</Text>
                    <Text style={{fontSize: 13, color: 'blue'}}>Luôn làm mới bộ lọc trước khi lọc dữ liệu kế tiếp!</Text>
                </View>
                <View style={{backgroundColor: '#fff'}}>
                    {/* InputText Camera */}
                
                    <View style={{flexDirection:'row', marginHorizontal: 5}}>
                        <View style={{justifyContent:'center', flex: 2.5, paddingTop: 10}}>
                            <Text style={{fontSize: 14, color:'black'}}>Camera:</Text>
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
                    {
                        showSearchCam ?
                        <View style={{position:'absolute', top: 45, left: 0, right: 0,  zIndex: 20, marginRight: 5}}>
                            <FlatList
                                data={filteredDataSource}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={ItemView}
                            />
                        </View> : null
                    }
                {/* InputText Thoi Gian*/}
                <View style={{flexDirection:'row', marginHorizontal: 5}}>
                    <View style={{justifyContent:'center', flex: 2.5, paddingTop: 10}}>
                        <Text style={{fontSize: 14, color:'black'}}>Thời gian:</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.textInputStyle}
                        onPress={()=>_onPressSetShowTime()}
                    >
                        <TextInput
                            style={{justifyContent: 'center', alignItems: 'center', flex: 4, color:'black'}}
                            editable={false}
                            onChangeText={(text) => setSearchTime(text)}
                            value={searchTime}
                            underlineColorAndroid="transparent"
                        />
                        <View style={{flex: 1, justifyContent:'center'}}>
                            <Icon name='calendar-outline' type='ionicon' />
                        </View>
                    </TouchableOpacity> 
                </View>
                {
                    showSearchTime ?
                    <View style={{ flexDirection: 'row', marginRight: 5, position:'absolute', top: 90, left: 0, right: 0, zIndex: 10}}>
                        <View style={{ flex: 2.5}}/>
                        <View style={{ flex: 7.5, marginLeft: -3}}>
                            <Calendar
                                style={{borderWidth: 1, borderColor: 'gray', height: 360}}
                                theme={{ 
                                    calendarBackground: 'beige', textSectionTitleColor: 'blue', todayTextColor: 'red', dayTextColor: 'black',
                                }}
                                current={currentDate}
                                onDayPress={day =>_onPressGetTime(day.dateString)}
                            />
                        </View>
                    </View> : null
                }

                {/* InputText Loai Su kien*/}
                <View style={{flexDirection:'row', marginHorizontal: 5}}>
                    <View style={{justifyContent:'center', flex: 2.5, paddingTop: 10}}>
                        <Text style={{fontSize: 14, color:'black'}}>Loại sự kiện:</Text>
                    </View>
                    <TouchableOpacity  style={styles.textInputStyle} onPress={()=>_onPressSetShowLoaiSK()} >
                        <TextInput
                            style={{justifyContent: 'center', alignItems: 'center', flex: 4, color:'black', fontSize: 13}}
                            editable={false}
                            onChangeText={(text) => setSearchLoaiSK(text)}
                            value={searchLoaiSK}
                            underlineColorAndroid="transparent"
                        />
                        <View style={{flex: 1, justifyContent:'center'}}> 
                            <Icon name='chevron-down-outline' type='ionicon' /> 
                        </View>
                    </TouchableOpacity>  
                </View>
                {
                    showSearchLoaiSK ?
                    <View style={{position:'absolute', top: 135, left: 0, right: 0,  zIndex: 20, marginRight: 5}}>
                        <FlatList
                            data={arrLoaiSK}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ItemViewLoaiSK}
                        />
                    </View> : null
                }

                {/* InputText Phan Loai*/}
                <View style={{flexDirection:'row', marginHorizontal: 5}}>
                    <View style={{justifyContent:'center', flex: 2.5, paddingTop: 10}}>
                        <Text style={{fontSize: 14, color:'black'}}>Phân loại:</Text>
                    </View>
                    <TouchableOpacity style={styles.textInputStyle} onPress={()=>_onPressSetShowPhanLoai()} >
                        <TextInput
                            style={{justifyContent: 'center', alignItems: 'center', flex: 4, color:'black', fontSize: 13}}
                            editable={false}
                            onChangeText={(text) => setSearchPhanLoai(text)}
                            value={searchPhanLoai}
                            underlineColorAndroid="transparent"
                        />
                        <View style={{flex: 1, justifyContent:'center'}}>
                            <Icon name='chevron-down-outline' type='ionicon' />
                        </View>
                    </TouchableOpacity>
                </View>
                {
                    showSearchPhanLoai ?
                    <View style={{position:'absolute', top: 180, left: 0, right: 0,  zIndex: 20, marginRight: 5}}>
                        <FlatList
                            data={arrPhanLoai}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={ItemViewPhanLoai}
                        />
                    </View> : null
                }

                {/* Button Tim kiem va Lam Moi */}
                <View style={{flexDirection:'row', marginHorizontal: 5, justifyContent: 'space-between', marginTop: 10}}>
                    <View style={{flex: 2.5}}/>
                    <TouchableOpacity
                        disabled={disableButton}
                        style={{
                            flex:7.5/2, backgroundColor: colorbutton, height: 40, 
                            justifyContent:'center', marginHorizontal: 20, borderRadius: 10,
                            shadowColor: 'black', shadowOffset:{width: 4, height: 5},
                            shadowRadius: 2, shadowOpacity: 0.5,
                            elevation: 10,
                        }}
                        onPress={() => _onPressSearch()}
                    >
                        <Text style={{fontSize: 16, color:'white', textAlign: 'center'}}>Tìm kiếm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex:7.5/2, backgroundColor:'#00CCFF', height: 40, 
                            justifyContent:'center', marginHorizontal: 15, borderRadius: 10,
                            shadowColor: 'black', shadowOffset:{width: 4, height: 5},
                            shadowRadius: 2, shadowOpacity: 0.5,
                            elevation: 10,
                        }}
                        onPress={() => _onPressLamMoi()}
                    >
                        <Text style={{fontSize: 16, color:'white', textAlign: 'center'}}>Làm mới</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 10, width: '100%', flex:1}}>
                {
                    showComFilter ?  (
                        isAllEvent ?
                        <View style={{marginTop: 2, width: '100%', height: '80%'}}>
                            <FlatList
                                data={allEvent}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal={false}
                                numColumns={2}
                                renderItem={ItemViewAllEvent}
                            />
                        </View> 
                        :
                        <View style={{marginTop: 10}}>
                            <View style={{height: 45, alignItems: 'center', justifyContent:'center'}}>
                                <Text style={{fontSize: 18}}>Không tìm thấy!</Text>
                            </View> 
                        </View>
                    ) : null
                }
                </View>
                
            </View>
            
        </View>
        } 
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
        justifyContent:'center',
        color: 'black',
        fontSize: 14,
        borderRadius: 5,
    },
    itemFlat:{
        width: '49%',
        justifyContent: 'center', 
        alignItems:'center', 
        margin: 2, 
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black', shadowOffset:{width: 2, height: 5},
        shadowRadius: 2, shadowOpacity: 0.3,
        elevation: 10,
        paddingVertical: 5,
    },
    
});

export default FilterEvent;