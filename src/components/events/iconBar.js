import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
 } from 'react-native';
 import { Icon } from 'react-native-elements';
 import GhiChuCanhBao from './ghiChu';
 


export default class IconBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowGhiChu: false,
        }
    }
    _onPressGhiChu = ()=>{
        this.setState({isShowGhiChu: !this.state.isShowGhiChu})
    }
    render() {
        const { navigation } = this.props;
        const iconEye = this.state.isShowGhiChu ? 'eye-off-outline' : 'eye-outline';
        return (
            <View>
                <View style={{flexDirection:'row', height: 40, alignItems:'center'}}>
                    <View style={{flex: 8}}/>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('TimDoiTuong')}
                        >
                            <Icon
                                name='search'
                                type='ionicon'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('LocDoiTuong')}
                        >
                            <Icon
                                name='funnel-outline'
                                type='ionicon'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', marginRight: 10}}>
                        <TouchableOpacity
                            style = {{justifyContent: 'center', flex: 2}}
                            onPress={()=>this._onPressGhiChu()}
                        >
                            <Icon name={iconEye} type='ionicon' /> 
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    this.state.isShowGhiChu ? <GhiChuCanhBao/>:null
                }
            </View>
        );
    }
}
