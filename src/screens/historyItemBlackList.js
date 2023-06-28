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
import DetailBlackListItem from './detailBlackItem';

//const urlHisBlackList = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/historyBlackList.php';
const urlHisBlackList = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/historyBlackList.php';
const HistoryItemBlackList = ({navigation, route}) => {
    const {name} = route.params;
    const [loaiSK, setLoaiSK] = useState('');
    const [length, setLength] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [showDetail, setShowDetail] = useState(false);
    const [id, setId] = useState('');
    const [hisItemBlackList, setHisItemBlackList] = useState([]);

    useEffect(() => {
        fetch(urlHisBlackList)
            .then((response) => response.json())
            .then((responseJson) => { 
                setHisItemBlackList(responseJson.filter((e) => e.DoiTuong === name)) 
                setLoaiSK(responseJson[0].LoaiSuKien)
                setLength(hisItemBlackList.length)
                setIsLoading(false)
            })
            .catch((error) => { console.error(error) });
        }, [hisItemBlackList]);
    const ItemView = ({item, index}) => {
        return (
            <TouchableOpacity   
                onPress={() => _onPressChiTiet(item.id)}
            >
                <View style ={{flexDirection: 'row', height: 50, justifyContent: 'center', backgroundColor: 'white'}}>
                    <View style ={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style = {{color: 'blue', fontSize: 11, textAlign: 'center'}}> {index+1}</Text>
                        </View>
                        <View style={{flex: 3, justifyContent: 'center', borderLeftWidth: 0.5, borderLeftColor: 'gray'}}>
                            <Text style = {{color: 'blue', fontSize: 11, textAlign: 'center'}}> {item.ThoiGian}</Text>
                        </View>
                        <View style={{flex: 2.5, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                            <Text style = {{color: 'blue', fontSize: 11, textAlign: 'center'}}>  {item.Camera}</Text>
                        </View>
                        <View style={{flex: 3.5, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                            <Text style = {{color: 'blue', fontSize: 11, textAlign: 'center'}}>{item.ViTri}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity> 
        );
    };

    const ItemSeparatorView = () => {
        return ( <View  style={{ height: 2, width: '100%', backgroundColor: '#C8C8C8' }} /> );
    };
    const _onPressChiTiet = (id) =>{ 
          setShowDetail(true)
          setId(id)
    };
    const Null = '<< Trống >>';
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'green', marginBottom: -100}}>
            <StatusBar barStyle={'light-content'}/>
            <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 10, marginTop: 10}}>
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
            <View style={{flex: 1, backgroundColor: 'beige'}}>
                <View style={{marginVertical: 5}}>
                    <View style = {{flexDirection: 'row', paddingLeft: 20}}>
                        <View style = {{flexDirection: 'row', height: 40, alignItems:'center', flex: 8}}>
                            <Text style = {{fontSize: 16, color: 'black'}}>Đối tượng: </Text>
                            <Text style = {{color: 'red', fontSize: 16, fontWeight:'bold'}}> {name}</Text>
                        </View>
                        <View  style={{width: 30, height: 30, justifyContent: 'center', alignItems:'center', flex: 2}}>
                            {
                                showDetail ? 
                                <TouchableOpacity
                                    onPress={()=>setShowDetail(false)}
                                >
                                    <Image style = {{width:25, height:25}} source={require('../images/x.png')}></Image>
                                </TouchableOpacity> : null
                            }
                            
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', paddingLeft: 20, marginBottom: 10}}>
                        <Text style = {{fontSize: 13, color: 'black'}}>Chú ý: </Text>
                        <Text style = {{color: '#990000', fontSize: 13}}> Biển số xe trong danh sách cảnh báo</Text>
                    </View>
                </View>
                {
                    showDetail ?
                    <DetailBlackListItem id={id}/>
                    :
                    <>
                    {
                        length !== 0 ?
                        <View>
                            <View style={{flexDirection:'row', height: 50, backgroundColor: '#cfe2ff', borderColor: 'black', borderBottomWidth: 3, borderTopWidth: 0.5}}>
                                <View style={{flex: 1, justifyContent: 'center'}}>
                                    <Text style = {styles.textTitle}>STT</Text>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                                    <Text style = {styles.textTitle}>Thời gian</Text>
                                </View>

                                <View style={{flex: 2.5, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                                    <Text style = {styles.textTitle}>Camera</Text>
                                </View>

                                <View style={{flex: 3.5, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                                    <Text style = {styles.textTitle}>Vị Trí</Text>
                                </View>

                            </View>
                            <View style={{width: '100%', height: '80%'}}>
                                <FlatList
                                    data={hisItemBlackList}
                                    keyExtractor={(item, index) => index.toString()}
                                    ItemSeparatorComponent={ItemSeparatorView}
                                    renderItem={ItemView}
                                />
                            </View>
                            
                        </View>
                        :
                        <View>
                            <View style={{flexDirection:'row', height: 50, backgroundColor: '#cfe2ff', borderColor: 'black', borderBottomWidth: 3, borderTopWidth: 0.5}}>
                                <View style={{flex: 1, justifyContent: 'center'}}>
                                    <Text style = {styles.textTitle}>STT</Text>
                                </View>
                                <View style={{flex: 3, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                                    <Text style = {styles.textTitle}>Thời gian</Text>
                                </View>

                                <View style={{flex: 2.5, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                                    <Text style = {styles.textTitle}>Camera</Text>
                                </View>

                                <View style={{flex: 3.5, justifyContent: 'center', borderLeftWidth: 0.5, borderColor: 'black'}}>
                                    <Text style = {styles.textTitle}>Vị Trí</Text>
                                </View>
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'center', height: 50}}>
                                <Text style={{color: 'blue', fontSize: 13}}> {Null} </Text>
                            </View>
                        </View>
                    }
                    </>
                }
                

            </View>
            
        </SafeAreaView>
    );
};
export default HistoryItemBlackList;
const styles = StyleSheet.create({
    textTitle:{
        color: 'black',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});