import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
 } from 'react-native';

import { Icon } from 'react-native-elements';

export default class GhiChuCanhBao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }
    _onPressShow = () =>{
        this.setState({isShow: !this.state.isShow})
    }
  render() {
    const iconEye = this.state.isShow ? 'eye-off' : 'eye';
    return (
        <View style = {{backgroundColor: "white", marginTop: 5, marginHorizontal: 1, marginBottom: 5}}>
            <View style = {{padding: 10, flexDirection: 'column',}}>
                <View style={{flexDirection: 'row'}}>
                    <View style = {{justifyContent: 'center', flex: 8}}>
                        <Text style = {{color: 'black', fontWeight: 'bold' }}>Ghi Chú:</Text>
                    </View>
                    <TouchableOpacity
                        style = {{justifyContent: 'center', flex: 2}}
                        onPress={()=>this._onPressShow()}
                    >
                        <Icon name={iconEye} type='ionicon' /> 
                    </TouchableOpacity>
                </View>
                
                {
                    this.state.isShow ? 
                    (<>
                        <View style = {{flexDirection: 'row', marginTop: 10}}>
                            <View style={{borderWidth: 0.5, borderColor: 'black', backgroundColor: 'red', width: 40, height: 25}}/>
                            <View style={{justifyContent: 'center'}}>
                                <Text style = {{color: 'black', marginLeft: 10 }}>Đối tượng nằm trong danh sách cảnh báo</Text>
                            </View>
                        </View>

                        <View style = {{flexDirection: 'row', marginTop: 10}}>
                            <View style={{borderWidth: 0.5, borderColor: 'black', backgroundColor: '#00FF99', width: 40, height: 25}}/>
                            <View style={{justifyContent: 'center'}}>
                                <Text style = {{color: 'black', marginLeft: 10 }}>Đối tượng nằm ngoài danh sách cảnh báo</Text>
                            </View>
                        </View>
                    </>):null
                }
                

            </View>
        </View>
    );
  }
}
