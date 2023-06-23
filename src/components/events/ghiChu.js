import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
 } from 'react-native';

import { Icon } from 'react-native-elements';

export default class GhiChuCanhBao extends React.Component {
  render() {
    return (
        <View style = {{backgroundColor: "white", marginTop: 5, marginHorizontal: 1, marginBottom: 5}}>
            <View style = {{padding: 10, flexDirection: 'column',}}>
                <View style={{flexDirection: 'row'}}>
                    <View style = {{justifyContent: 'center', flex: 8}}>
                        <Text style = {{color: 'black', fontWeight: 'bold', fontSize: 16 }}>Ghi Chú:</Text>
                    </View>
                </View>
                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                        <View style={{justifyContent: 'center', flex: 1.5}}>
                            <Text style = {{color: 'red', marginLeft: 10, fontSize: 16 }}>textT</Text>
                        </View>
                        <View style={{justifyContent: 'center', flex: 8.5}}>
                            <Text style = {{color: 'black', marginLeft: 10, fontSize: 13 }}>Đối tượng nằm trong danh sách cảnh báo.</Text>
                        </View>
                    </View>

                    <View style = {{flexDirection: 'row', marginTop: 10}}>
                        <View style={{justifyContent: 'center', flex: 1.5}}>
                            <Text style = {{color: 'green', marginLeft: 10, fontSize: 16, }}>textT</Text>
                        </View>
                        <View style={{justifyContent: 'center', flex: 8.5}}>
                            <Text style = {{color: 'black', marginLeft: 10, fontSize: 13}}>Đối tượng nằm ngoài danh sách cảnh báo.</Text>
                        </View>
                    </View>

                    {/* <View style = {{flexDirection: 'row', marginTop: 10}}>
                        <View style={{flex: 1.5, marginLeft: -5}}>
                            <Icon
                                name='hand-right-outline'
                                type='ionicon'
                            />
                        </View>
                        <View style={{justifyContent: 'center', flex: 8.5}}>
                            <Text style = {{color: 'black', marginLeft: 10, fontSize: 13 }}>Chạm vào đối tượng để xem thông tin chi tiết.</Text>
                        </View>
                    </View> */}
            </View>
        </View>
    );
  }
}
