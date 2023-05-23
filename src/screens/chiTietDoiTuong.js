import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';

const url = 'http://192.168.1.36/dataCamera/listEvent.php';

export default class ChiTietDoiTuong extends React.Component {
    componentDidMount() {
        this.getChiTietDoiTuong()
    }

    constructor(props) {
        super(props);
        this.state = {
            arrEventAll:[],
            note:'', doiTuong: '', time: '', location:'',
            image:'', loaiSK:'', cam:'', imageTongQuan:'',
            alert: '',
        }
    }
    async getChiTietDoiTuong() {
        try {
            const response = await fetch(url);
            const json = await response.json();
            this.setState({ arrEventAll: json });
            const {arrEventAll} = this.state;
            const id = this.props.navigation.getParam ( 'id', 'No_Name');
            for (var i = 0; i < arrEventAll.length; i++){
                if (arrEventAll[i].key === id){
                    this.setState({note: arrEventAll[i].ChuY, doiTuong: arrEventAll[i].DoiTuong});
                    this.setState({image: arrEventAll[i].Hinh, loaiSK: arrEventAll[i].LoaiSuKien});
                    this.setState({time: arrEventAll[i].ThoiGian, location: arrEventAll[i].ViTri});
                    this.setState({cam: arrEventAll[i].Camera, imageTongQuan: arrEventAll[i].HinhTongQuan});
                    this.setState({alert: arrEventAll[i].CanhBao});
                }
            }
        } catch (error) { console.log(error);} 
    }
  render() {
    const { navigation } = this.props;
    const {note, image, doiTuong, loaiSK, time, location, cam, imageTongQuan} = this.state;
    const colorText = this.state.alert == 0 ? 'green' : 'red';
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center', marginVertical: 10}}>
                <Text style={{color: colorText, fontSize: 20, fontWeight: 'bold'}}>{note}</Text>
            </View>
            <View style={{marginTop: 10}}>
                <View style={{marginVertical: 10, marginLeft: 5, flexDirection: 'row', alignItems: 'center'}}>
                    <View>
                        <Icon name={'image-outline'} type='ionicon' /> 
                    </View>
                    <View style={{marginLeft: 5}}>
                        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Hình ảnh:</Text>
                    </View>
                </View>
                <View style={{alignItems:'center', height: 165, justifyContent: 'center'}}>
                    {
                        image === '' ?
                        (<>
                            <Text style ={{color: 'blue', fontSize: 24}}>No Image</Text>
                        </>)
                        :
                        (<>
                            <Image 
                                style = {{width: 370, height: 160, borderRadius: 10, resizeMode:"stretch"}} 
                                source={image ? {uri: image} : ''} 
                            />
                        </>)
                    }
                    
                </View>
            </View>
            <View style = {{flexDirection: 'row', marginTop: 20, marginLeft: 5, alignItems:'center'}}>
                <View>
                    <Icon name={'man-outline'} type='ionicon' /> 
                </View>
                <View style={{marginLeft: 5}}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Đối tượng:</Text>
                </View>
                <View style={{marginLeft: 5, paddingLeft: 10, }}>
                    <Text style={{color: 'blue', fontSize: 18}}>{doiTuong}</Text>
                </View>
            </View>
            <View style = {{flexDirection: 'row', marginTop: 10, marginLeft: 5, alignItems:'center'}}>
                <View>
                    <Icon name={'checkmark-done-outline'} type='ionicon' /> 
                </View>
                <View style={{ marginLeft: 5}}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Loại sự kiện:</Text>
                </View>
                <View style={{marginLeft: 5, paddingLeft: 10}}>
                    <Text style={{color: 'blue', fontSize: 18}}>{loaiSK}</Text>
                </View>
            </View>
            <View style = {{flexDirection: 'row', marginTop: 10, alignItems: 'center', marginLeft: 5}}>
                <View>
                        <Icon name={'hourglass-outline'} type='ionicon' /> 
                </View>
                <View style={{ marginLeft: 5}}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Thời gian:</Text>
                </View>
                <View style={{marginLeft: 5, paddingLeft: 10}}>
                    <Text style={{color: 'blue', fontSize: 18}}>{time}</Text>
                </View>
            </View>
            <View style = {{flexDirection: 'row', marginTop: 10, alignItems:'center', marginLeft: 5}}>
                <View>
                        <Icon name={'videocam-outline'} type='ionicon' /> 
                </View>
                <View style={{ marginLeft: 5}}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Camera:</Text>
                </View>
                <View style={{marginLeft: 5, paddingLeft: 10}}>
                    <Text style={{color: 'blue', fontSize: 18}}>{cam}</Text>
                </View>
            </View>
            <View style = {{flexDirection: 'row', marginTop: 10, alignItems: 'center', marginLeft: 5}}>
                <View>
                    <Icon name={'location-outline'} type='ionicon' /> 
                </View>
                <View style={{ marginLeft: 5}}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Vị trí:</Text>
                </View>
                <View style={{marginLeft: 5, paddingLeft: 10}}>
                    <Text style={{color: 'blue', fontSize: 18}}>{location}</Text>
                </View>
            </View>
            <View style = {{marginTop: 30}}>
                <View style={{ marginLeft: 5, alignItems:'center', flexDirection: 'row'}}>
                    <View>
                        <Icon name={'image-outline'} type='ionicon' /> 
                    </View>
                    <View style={{ marginLeft: 5}}>
                        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Hình ảnh tổng quan:</Text>
                    </View>
                </View>
                <View style={{alignItems:'center', marginTop: 15}}>
                        {/* <Image 
                            style = {{width: '95%', height: 270, borderRadius: 10, resizeMode:'contain'}} 
                            source={{uri: 'https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-anh-dep-4.jpg'}} 
                        /> */}
                    {
                        imageTongQuan !== '' ? 
                        <Image 
                            style = {{width: '95%', height: 270, borderRadius: 10, resizeMode:'contain'}} 
                            source={imageTongQuan ? {uri: imageTongQuan} : ''} 
                        /> : null
                    }
                    
                </View>
            </View>

        </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'beige',
        margin: 10,
        borderRadius: 10

    },
});
