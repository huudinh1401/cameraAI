import React, {useState, useEffect} from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    FlatList,
    Image,
    Alert
} from 'react-native';

import IconBar from './iconBar';
import TitleEvent from './titileEvent';
import ChiTietDoiTuong from '../../screens/chiTietDoiTuong';

const url = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/listEventBsx.php?page=';
const BsxEvent =({navigation})=> {
    const [refresh, setRefresh] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [showIconBar, setShowIconBar] = useState(true);
    const [id, setId] = useState('');
    const [page, setPage] = useState(1);
    const [arrEventBsx, setArrEventBsx] = useState([]);

    useEffect(() => {
        getArrEvent()
        const interval = setInterval(() => {
            fetch(url+page)
                .then((response) => response.json())
                .then((responseJson) => {
                    setArrEventBsx(responseJson)
                    setRefresh(false)
                })
                .catch((error) => { console.error(error); });
        }, 5000);    
        return () => clearInterval(interval);
    }, []);
    const getArrEvent=()=>{
        fetch(url+page)
            .then((response)=>response.json())
            .then(  (responseJson)=>{
                setArrEventBsx(responseJson)
                setRefresh(false)
            })
            .catch ((e)=>{ Alert.alert('Lỗi!','Không có kết nối mạng...\nVui lòng thử lại!')});
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
    //const renderSeparator = () => { return ( <View style={{height: 0.5, width: "100%", backgroundColor: "gray"}}/>); };
    return (
        <View style = { styles.container }>
            { showIconBar ? <IconBar navigation={navigation}/> : null }
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
                    <FlatList
                        data={arrEventBsx}
                        keyExtractor={(item, index) => index}
                        //ItemSeparatorComponent={renderSeparator}
                        initialNumToRender={10}
                        horizontal={false}
                        numColumns={2}
                        refreshing={refresh}
                        onRefresh={()=>_refresh()}
                        renderItem={({item, index}) =>
                        <View key={index} style={styles.itemFlat}>
                            <TouchableOpacity onPress={() => _onPressChiTiet(item.id)} >
                                <View style={{justifyContent: 'center',}}>
                                    <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 13, textAlign: 'center', fontWeight: 'bold', marginBottom: 3}}>{item.DoiTuong}</Text>
                                </View>

                                <View style={{justifyContent: 'center'}}>
                                    <Text style = {{color: 'black', fontSize: 11, textAlign: 'center', marginBottom: 3}}>{item.Camera}</Text>
                                </View>

                                <View style={{justifyContent: 'center'}}>
                                    <Text style = {{color: 'black', fontSize: 11, textAlign: 'center', marginBottom: 3}}>{item.ViTri}</Text>
                                </View>

                                <View style={{justifyContent: 'center'}}>
                                    <Text style = {{color: 'black', fontSize: 11, textAlign: 'center', marginBottom: 3}}>{item.ThoiGian}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }/>
                </View>
            }
            
        </View>
    );
}
export default BsxEvent;
const styles = StyleSheet.create({
    container: { flex: 1 },
    itemFlat:{
        width: '49%',
        justifyContent: 'center', 
        alignItems:'center', 
        margin: 2, 
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black', shadowOffset:{width: 4, height: 5},
        shadowRadius: 2, shadowOpacity: 0.3,
        elevation: 10,
        paddingVertical: 5,
    },
});