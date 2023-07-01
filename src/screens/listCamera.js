import React, {Component} from 'react';
import { StyleSheet,
  View,
  Text, Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert, SafeAreaView
 } from 'react-native';
import ItemArea from '../components/itemArea';

const url = 'https://odoo.nguyenluanbinhthuan.com/dataCamera/listArea.php';

export default class DsCamera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrArea: [],
      idChoose:'',
      isShow: false,
      tenKV: '',
      tenCam: '',
      rtsp:'',
      nvrID: '',
    }
  }
  componentDidMount() {
    this.getArrArea()
  }
  async getArrArea() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setState({ arrArea: json });
    } catch (error) {Alert.alert('Lỗi!','Không có kết nối mạng...\nVui lòng thử lại!')} 
  }
  _onPressShow = (id, idnvr) => {
    this.setState({ idChoose: id });
    this.setState({ isShow: !this.state.isShow });
    this.setState({ nvrID: idnvr });
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 3,
          width: "90%",
          backgroundColor: "#CED0CE",
          marginLeft: "5%",
          marginRight: "5%"
        }}
      />
    );
  };
  render() {
    const {navigation, route} = this.props;
    return (
        <SafeAreaView style = { styles.container }>
          <StatusBar barStyle={'light-content'}/>
          <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginBottom: 5, marginTop: 50}}>
            <TouchableOpacity
                style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                onPress={()=>navigation.goBack()}
            >
                <Image style = {{width:25, height:25}} source={require('../images/back_white.png')}></Image>
            </TouchableOpacity>
            <View style={{flex: 7, justifyContent: 'center', alignItems:'center'}}>
                <Text style = {{color: 'white', fontSize: 18, textAlign: 'center'}}>Danh sách Camera</Text>
            </View>
            <TouchableOpacity
                style={{flex: 1.5, justifyContent: 'center', alignItems:'center'}}
                onPress={()=>navigation.navigate('Home')}
            >
                <Image style = {{width:25, height: 25}} source={require('../images/home.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={{height: '100%', width:'100%', backgroundColor:'white'}}>
            <FlatList
              data={this.state.arrArea}
              ItemSeparatorComponent={this.renderSeparator}
              renderItem={({item}) =>
            <View>
              <TouchableOpacity onPress={() => this._onPressShow(item.key, item.Nvr_id)} >
                <View style ={{flexDirection: 'row', height: 40, marginHorizontal: "5%", justifyContent: 'center'}}>
                  <View style ={{flex: 1, justifyContent:'center', paddingLeft: 5}}>
                    <Text style = {styles.text}>{item.AreaName}</Text>
                  </View>
                  {
                    this.state.idChoose === item.key ?
                    (
                      this.state.isShow ? 
                        <View style ={{paddingRight: 20, justifyContent:'center'}}> 
                          <Text style = {styles.text}>-</Text> 
                        </View>
                        :
                        <View style ={{paddingRight: 20, justifyContent:'center'}}>
                          <Text style = {styles.text}>+</Text>
                        </View>
                    ):
                    <View style ={{paddingRight: 20, justifyContent:'center'}}>
                      <Text style = {styles.text}>+</Text>
                    </View>
                  }
                  
                </View>
              </TouchableOpacity>
              {
                this.state.idChoose === item.key ?
                (this.state.isShow ? <ItemArea idNVR = {this.state.nvrID} navigation = {navigation} route = {route}/> : null) : null
              }
            </View>
            }/>
          </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent:'center',
  },
  text:{
    color: 'black',
    fontSize: 16,
  },
 
});