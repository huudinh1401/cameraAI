import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';

import TitleEvent from './titileEvent';

const SearchEvent = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.47/dataCamera/listEventAll.php')
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
        } else {
        setFilteredDataSource(masterDataSource);
        setSearch(text);
        }
    };

  const ItemView = ({item}) => {
    return (
        <TouchableOpacity   
            onPress={() => _onPressChiTiet(item.id)}
        >
            <View style ={{
                flexDirection: 'row', height: 45, justifyContent: 'center', 
                backgroundColor: '#EEEEEE' }}>
                <View style ={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1.8, justifyContent: 'center', padding: 2}}>
                        <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 14}}>
                            {item.DoiTuong}
                        </Text>
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

    const ItemSeparatorView = () => {
        return ( <View  style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }} /> );
    };
    const _onPressChiTiet = (id) =>{ navigation.navigate('ChiTietDT',{id})  };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
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
                    search !==''?
                    <>
                        <TitleEvent col1={'Đối tượng '} col2={'Camera'} col3={'Vị trí'} col4={'Thời gian'}/>
                        <FlatList
                            data={filteredDataSource}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={ItemSeparatorView}
                            renderItem={ItemView}
                        />
                    </>
                    : null
                }
                
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});

export default SearchEvent;