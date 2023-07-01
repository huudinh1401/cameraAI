import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';


const urlBlackList = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/blackList.php';
const BlackList = ({navigation}) => {
    const [blackList, setBlackList] = useState([]);

    useEffect(() => {
        fetch(urlBlackList)
            .then((response) => response.json())
            .then((responseJson) => { setBlackList(responseJson); })
            .catch((error) => { console.error(error); });
    }, [blackList]);

    const ItemView = ({item, index}) => {
        return (
            <View style={styles.itemFlat}>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() => _onPressHisItemBlack(item.DoiTuong)}>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
                        <Text style = {{color: 'black', fontSize: 13, textAlign: 'center', marginBottom: 5, fontWeight: 'bold'}}>{index+1}</Text>
                    </View>
                    <View style={{justifyContent: 'center', flex: 8}}>
                        <View style={{justifyContent: 'center',}}>
                            <Text style = {{color: 'red', fontSize: 13, textAlign: 'center', fontWeight: 'bold', marginBottom: 5}}>{item.DoiTuong}</Text>
                        </View>

                        <View style={{justifyContent: 'center'}}>
                            <Text style = {{color: 'black', fontSize: 11, textAlign: 'center', marginBottom: 5}}>{item.LoaiSuKien}</Text>
                        </View>

                        <View style={{justifyContent: 'center'}}>
                            <Text style = {{color: 'black', fontSize: 11, textAlign: 'center', marginBottom: 5}}>{item.ThoiGian}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    const _onPressHisItemBlack = (name) =>{ navigation.navigate('HisItemBlack',{name})  };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{width: '100%', height: '90%', marginHorizontal: 2}}>
                <FlatList
                    data={blackList}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    numColumns={2}
                    renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textTitle:{
        color: 'black', fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    itemFlat:{
        width: '48%',
        justifyContent: 'center', 
        alignItems:'center', 
        margin: 3, 
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black', shadowOffset:{width:0, height: 0},
        shadowRadius: 2, shadowOpacity: 0.3,
        elevation: 10,
        paddingVertical: 5,
    },
});

export default BlackList;