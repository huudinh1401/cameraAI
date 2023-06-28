import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import TitleEvent from './titileEvent';
import ChiTietDoiTuong from '../../screens/chiTietDoiTuong';

const SearchEvent = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [showDetail, setShowDetail] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [id, setId] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
  useEffect(() => {
    fetch('https://odoo.nguyenluanbinhthuan.com/dataCamera/AllEventNoImage.php')
        .then((response) => response.json())
        .then((responseJson) => {
            setFilteredDataSource(responseJson);
            setMasterDataSource(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    const searchDoiTuong = (text) => {
        if (text) {
        const newData = masterDataSource.filter(
            function (item) {
                const itemData = item.DoiTuong
                    ? item.DoiTuong.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
        });
            setFilteredDataSource(newData);
            setSearch(text);
            setShowSearch(true)
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
            setShowSearch(true)
        }
    };

  const ItemView = ({item}) => {
    return (
        <TouchableOpacity   
            onPress={() => _onPressChiTiet(item.id)}
        >
            <View style ={{ flexDirection: 'row', height: 45, justifyContent: 'center',  backgroundColor: '#EEEEEE' }}>
                <View style ={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1.8, justifyContent: 'center', padding: 2}}>
                        <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 11}}>  {item.DoiTuong}</Text>
                    </View>
                    <View style={{flex: 3.5, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                        <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 11, textAlign: 'center'}}>{item.Camera}</Text>
                    </View>
                    <View style={{flex: 2.5, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                        <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 11, textAlign: 'center'}}>{item.ViTri}</Text>
                    </View>
                    <View style={{flex: 2.2, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                        <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 11, textAlign: 'center'}}>{item.ThoiGian}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity> 
    );
  };

    const ItemSeparatorView = () => {
        return ( <View  style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }} /> );
    };
    const _onPressChiTiet = (id) =>{ 
        setShowDetail(true)
        setShowSearch(false)
        setId(id)
    };
    const goBack = () =>{ 
        setShowDetail(false)
        setShowSearch(true)
    };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
            <StatusBar barStyle={'light-content'}/>
            <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 10, marginTop: 10}}>
                <TouchableOpacity
                    style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                    onPress={()=>navigation.goBack()}
                >
                    <Image style = {{width:30, height:30}} source={require('../../images/back_white.png')}></Image>
                </TouchableOpacity>
                <View style={{flex: 7, justifyContent: 'center', alignItems:'center'}}>
                    <Text style = {{color: 'white', fontSize: 20, textAlign: 'center', fontWeight:'bold'}}>Tìm kiếm đối tượng</Text>
                </View>
                <TouchableOpacity
                    style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                    onPress={()=>navigation.navigate('Home')}
                >
                    <Image style = {{width:35, height: 35}} source={require('../../images/home.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchDoiTuong(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Nhập đối tượng tìm kiếm...(VD: 86C...)"
                    placeholderTextColor={'gray'}
                />
                {
                    showSearch?
                    <View style={{width: '100%', height:'65%'}}>
                        <TitleEvent col1={'Đối tượng '} col2={'Camera'} col3={'Vị trí'} col4={'Thời gian'}/>
                        <FlatList
                            data={filteredDataSource}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={ItemSeparatorView}
                            renderItem={ItemView}
                        />
                    </View>
                    : null
                }
                {
                    showDetail ?
                    <View style={{flex: 1, backgroundColor: 'white'}}>
                        <View  style={{width: 40, height: 40, justifyContent: 'center', alignItems:'center', position:'absolute', top: 5, left: 20, zIndex: 10}}>
                            <TouchableOpacity
                                onPress={()=>goBack()}
                            >
                                <Image style = {{width:30, height:30}} source={require('../../images/back_white.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <ChiTietDoiTuong id={id}/>
                    </View>
                    :
                    null
                }
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        marginBottom: -300
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        color:'black',
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});

export default SearchEvent;