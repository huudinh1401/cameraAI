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
            .then((responseJson) => {
                setBlackList(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
        }, [blackList]);
    const ItemView = ({item, index}) => {
        return (
            <TouchableOpacity   
                onPress={() => _onPressHisItemBlack(item.DoiTuong)}
            >
                <View style ={{flexDirection: 'row', height: 50, justifyContent: 'center', backgroundColor: 'beige'}}>
                    <View style ={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style = {{color: 'blue', fontSize: 12, textAlign: 'center'}}> {index+1}</Text>
                        </View>
                        <View style={{flex: 2, justifyContent: 'center', borderLeftWidth: 0.5, borderLeftColor: 'gray'}}>
                            <Text style = {{color: 'blue', fontSize: 12}}>  {item.DoiTuong}</Text>
                        </View>
                        <View style={{flex: 3.5, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                            <Text style = {{color: 'blue', fontSize: 12}}>  {item.LoaiSuKien}</Text>
                        </View>
                        <View style={{flex: 3.5, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                            <Text style = {{color: 'blue', fontSize: 12, textAlign: 'center'}}>{item.ThoiGian}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity> 
        );
    };

    const ItemSeparatorView = () => {
        return ( <View  style={{ height: 3, width: '100%', backgroundColor: '#C8C8C8' }} /> );
    };
    const _onPressHisItemBlack = (name) =>{ navigation.navigate('HisItemBlack',{name})  };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View >
                <View style={{flexDirection:'row', height: 50, backgroundColor: '#cfe2ff', borderColor: 'black', borderBottomWidth: 3, borderTopWidth: 0.5}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style = {styles.textTitle}>STT</Text>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                        <Text style = {styles.textTitle}>Đối tượng</Text>
                    </View>

                    <View style={{flex: 3.5, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                        <Text style = {styles.textTitle}>Loại nhận diện</Text>
                    </View>

                    <View style={{flex: 3.5, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                        <Text style = {styles.textTitle}>Thời gian</Text>
                    </View>

                </View>
                <View style={{width: '100%', height: '90%'}}>
                    <FlatList
                        data={blackList}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemView}
                    />
                </View>
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textTitle:{
        color: 'black',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

export default BlackList;