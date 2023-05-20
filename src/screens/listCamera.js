import React, {Component} from 'react';
import { StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert
 } from 'react-native';
import ItemArea from '../components/itemArea';

const url = 'http://192.168.1.47/dataCamera/dsKhuVuc.php';

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
      areaID: '',
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
    } catch (error) {
      console.log(error);
    } 
  }
  _onPressShow = (id) => {
    this.setState({ idChoose: id });
    this.setState({ isShow: !this.state.isShow });
    this.setState({ areaID: id });
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "90%",
          backgroundColor: "#CED0CE",
          marginLeft: "5%",
          marginRight: "5%"
        }}
      />
    );
  };
  render() {
    const {navigation} = this.props;
    return (
        <View style = { styles.container }>
          <StatusBar barStyle={'light-content'}/>
          <View style={{paddingBottom: 30}}>

          </View>
          <FlatList
          data={this.state.arrArea}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({item}) =>
          <View>
            <TouchableOpacity
            onPress={() => this._onPressShow(item.key)}
            >
              <View style ={{flexDirection: 'row', height: 60, marginHorizontal: "5%", justifyContent: 'center'}}>
                <View style ={{flex: 1, justifyContent:'center', paddingLeft: 5}}>
                  <Text style = {styles.text}>{item.Name}</Text>
                </View>
                {
                  this.state.idChoose === item.key ?
                  (
                    this.state.isShow ? 
                    (<>
                      <View style ={{paddingRight: 20, justifyContent:'center'}}>
                        <Text style = {styles.text}>-</Text>
                      </View>
                    </>):
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
              (
                this.state.isShow ? <ItemArea idKV = {this.state.areaID} navigation = {navigation}/> : null
              ) : null
            }
          </View>
          }
          />
          <View style={{paddingBottom: 40}}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent:'center',
  },
  text:{
    color: 'black',
    fontSize: 20,
  },
 
});