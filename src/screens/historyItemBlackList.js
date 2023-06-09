import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity
} from 'react-native';

const urlHisBlackList = 'http://192.168.1.52/dataCamera/historyBlackList.php';
export default HistoryItemBlackList = ({navigation}) => {
    const name = navigation.getParam ( 'name', 'No_Name');
    const [loaiSK, setLoaiSK] = useState('');
    const [length, setLength] = useState(0);
    const [hisItemBlackList, setHisItemBlackList] = useState([]);

    useEffect(() => {
        fetch(urlHisBlackList)
            .then((response) => response.json())
            .then((responseJson) => { 
                setHisItemBlackList(responseJson.filter((e) => e.DoiTuong === name)) 
                setLoaiSK(responseJson[0].LoaiSuKien)
                setLength(hisItemBlackList.length)
            })
            .catch((error) => { console.error(error) });
        }, [hisItemBlackList]);
    const ItemView = ({item, index}) => {
        return (
            <TouchableOpacity   
                onPress={() => _onPressChiTiet(item.id)}
            >
                <View style ={{flexDirection: 'row', height: 55, justifyContent: 'center', backgroundColor: 'white'}}>
                    <View style ={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style = {{color: 'blue', fontSize: 14, textAlign: 'center'}}> {index+1}</Text>
                        </View>
                        <View style={{flex: 2.5, justifyContent: 'center', borderLeftWidth: 0.5, borderLeftColor: 'gray'}}>
                            <Text style = {{color: 'blue', fontSize: 14, textAlign: 'center'}}> {item.ThoiGian}</Text>
                        </View>
                        <View style={{flex: 2.7, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                            <Text style = {{color: 'blue', fontSize: 14, textAlign: 'center'}}>  {item.Camera}</Text>
                        </View>
                        <View style={{flex: 3.8, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                            <Text style = {{color: 'blue', fontSize: 14, textAlign: 'center'}}>{item.ViTri}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity> 
        );
    };

    const ItemSeparatorView = () => {
        return ( <View  style={{ height: 3, width: '100%', backgroundColor: '#C8C8C8' }} /> );
    };
    const _onPressChiTiet = (id) =>{ navigation.navigate('DetailBlackList',{id})  };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
            <StatusBar barStyle={'light-content'}/>
            <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 10}}>
                <TouchableOpacity
                    style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                    onPress={()=>navigation.goBack()}
                >
                    <Image style = {{width:30, height:30}} source={require('../images/back_white.png')}></Image>
                </TouchableOpacity>
                <View style={{flex: 7, justifyContent: 'center', alignItems:'center'}}>
                    <Text style = {{color: 'white', fontSize: 20, textAlign: 'center', fontWeight:'bold'}}>Lịch sử nhận dạng</Text>
                </View>
                <TouchableOpacity
                    style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                    onPress={()=>navigation.navigate('Home')}
                >
                    <Image style = {{width:35, height: 35}} source={require('../images/home.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, backgroundColor: 'beige', marginBottom: -200}}>
                <View style={{marginVertical: 10}}>
                    <View style = {{flexDirection: 'row', paddingLeft: 20, marginBottom: 10}}>
                        <Text style = {{fontSize: 20}}>Đối tượng: </Text>
                        <Text style = {{color: 'red', fontSize: 20, fontWeight:'bold'}}> {name}</Text>
                    </View>
                    <View style = {{flexDirection: 'row', paddingLeft: 20, marginBottom: 10}}>
                        <Text style = {{fontSize: 17}}>Chú ý: </Text>
                        <Text style = {{color: '#CC3300', fontSize: 17}}> Biển số xe trong danh sách cảnh báo</Text>
                    </View>
                    
                </View>
                {
                    length === 0 ? 
                    <View style={{flex: 1, alignItems: 'center', paddingTop: 100}}>
                        <Text style={{color: 'blue', fontSize:20}}>Không tìm thấy đối tượng trong lịch sử</Text>
                        <Image style = {{width:150, height:150, marginTop: 50}} source={require('../images/cam_ko_nen.jpg')}></Image>
                    </View>
                    :
                    <View>
                        <View style={{flexDirection:'row', height: 55, backgroundColor: '#cfe2ff', borderColor: 'black', borderBottomWidth: 3, borderTopWidth: 0.5}}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <Text style = {styles.textTitle}>STT</Text>
                            </View>
                            <View style={{flex: 2.5, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                                <Text style = {styles.textTitle}>Thời gian</Text>
                            </View>

                            <View style={{flex: 2.7, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                                <Text style = {styles.textTitle}>Camera</Text>
                            </View>

                            <View style={{flex: 3.8, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                                <Text style = {styles.textTitle}>Vị Trí</Text>
                            </View>

                        </View>
                        <FlatList
                            data={hisItemBlackList}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={ItemSeparatorView}
                            renderItem={ItemView}
                        />
                    </View>
                }
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textTitle:{
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});