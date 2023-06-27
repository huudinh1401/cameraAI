import React, {useState, useEffect} from 'react';
import { 
    Text, StyleSheet, 
    View, TouchableOpacity, 
    FlatList, Alert,
    Image, Dimensions, TextInput
} from 'react-native';
import TitleEvent from './titileEvent';
import IconBar from './iconBar';
import ChiTietDoiTuong from '../../screens/chiTietDoiTuong';

const windowWidth = Dimensions.get('window').width;
const url = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/listEventAllPage.php?page=';
//const url = 'http://192.168.1.13/dataCamera/listEventAllPage.php?page=';

const AllEvent = ( {navigation}) => {
    const [refresh, setRefresh] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [showIconBar, setShowIconBar] = useState(true);
    const [id, setId] = useState('');
    const [arrEventAll, setArrEventAll] = useState([]);

    useEffect(() => {
        getArrEvent()
        const interval = setInterval(() => {
            fetch(url+1)
                .then((response) => response.json())
                .then((responseJson) => {
                    setArrEventAll(responseJson)
                    setRefresh(false)
                })
                .catch((error) => { console.error(error); });
        }, 5000);    
        return () => clearInterval(interval);
    }, []);

    const getArrEvent=()=>{
        fetch(url+1)
            .then((response)=>response.json())
            .then(  (responseJson)=>{
                setArrEventAll(responseJson)
                setRefresh(false)
            })
            .catch (()=>{ Alert.alert('Lỗi!','Không có kết nối mạng...\nVui lòng thử lại!')});
    }
    const _onPressChiTiet = (id) =>{
        setShowDetail(true)
        setShowIconBar(false)
        setId(id)
    }
    const goBack = () =>{ 
        setShowDetail(false)
        setShowIconBar(true)
    };
    const _refresh = () =>{
        setRefresh(true)
        getArrEvent()
    }
    const renderSeparator = () => {
        return ( <View style={{height: 0.5, width: "100%", backgroundColor: "gray"}}/>);
    };
    return (
        <View style = { styles.container }>
            {
                showIconBar ? <IconBar navigation={navigation}/> : null
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
                <View style={{width: '100%', height: '90%'}}>
                    <TitleEvent col1={'Đối tượng '} col2={'Loại sự kiện'} col3={'Vị trí'} col4={'Thời gian'}/>
                    <FlatList
                        data={arrEventAll}
                        keyExtractor={(item, index) => index}
                        ItemSeparatorComponent={renderSeparator}
                        removeClippedSubviews={true}
                        refreshing={refresh}
                        onRefresh={()=>_refresh()}
                        // getItemLayout = {(data, index) => ({
                        //     length: 10,
                        //     offset: 10 * index,
                        //     index,
                        // })}
                        renderItem={({item, index}) =>
                            <View key={index}>
                                <TouchableOpacity   
                                    onPress={() => _onPressChiTiet(item.id)}
                                >
                                    <View style ={{ flexDirection: 'row', height: 45, justifyContent: 'center', backgroundColor: '#EEEEEE' }}>
                                        <View style ={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{flex: 1.8, justifyContent: 'center', padding: 2}}>
                                                <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 0.025*windowWidth}}>  {item.DoiTuong}</Text>
                                            </View>
                                            <View style={{flex: 3.5, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                                                <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 0.025*windowWidth, textAlign: 'center'}}>{item.LoaiSuKien}</Text>
                                            </View>
                                            <View style={{flex: 2.5, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                                                <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize:  0.025*windowWidth, textAlign: 'center'}}>{item.ViTri}</Text>
                                            </View>
                                            <View style={{flex: 2.2, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                                                <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize:  0.025*windowWidth, textAlign: 'center'}}>{item.ThoiGian}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
            }  
        </View>
        );
}
export default AllEvent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textTitle:{
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btnPage:{
        height: 35, 
        width: 30, 
        backgroundColor: '#990000', 
        alignItems:'center', 
        justifyContent:'center', 
        marginLeft:5, 
        borderRadius:7
    },

});