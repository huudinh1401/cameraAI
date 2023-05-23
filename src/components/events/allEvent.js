import React, {Component} from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    FlatList 
} from 'react-native';
import { Icon } from 'react-native-elements'
import GhiChuCanhBao from './ghiChu';
import TitleEvent from './titileEvent';

const url = 'http://192.168.1.36/dataCamera/listEvent.php';

export default class AllEvent extends React.Component {
    componentDidMount() {
        this.getArrEvent()
    }

    constructor(props) {
        super(props);
        this.state = {
            arrEventAll:[],
        }
    }
    async getArrEvent() {
        try {
            const response = await fetch(url);
            const json = await response.json();
            this.setState({ arrEventAll: json });
        } catch (error) { console.log(error);} 
    }
    _onPressChiTiet = (id) =>{
        const { navigation } = this.props;
        navigation.navigate('ChiTietDT',{id}) 
    }
    renderSeparator = () => {
        return ( <View style={{height: 0.5, width: "100%", backgroundColor: "gray"}}/>);
    };
    render() {
        const { navigation } = this.props;
        return (
        <View style = { styles.container }>
            <GhiChuCanhBao/>
            <TitleEvent col1={'Đối tượng'} col2={'Loại sự kiện'} col3={'Vị trí'} col4={'Thời gian'}/>
            <FlatList
                data={this.state.arrEventAll}
                pagingEnabled={true}
                ItemSeparatorComponent={this.renderSeparator}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 50
                  }}
                renderItem={({item}) =>
                <View>
                    <TouchableOpacity
                        onPress={() => this._onPressChiTiet(item.key)}
                    >
                        <View style ={{
                            flexDirection: 'row', height: 45, justifyContent: 'center', 
                            backgroundColor: item.CanhBao === '0'? '#00FF99' : 'red' }}>
                            <View style ={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1.8, justifyContent: 'center'}}>
                                    <Text style = {{color: item.CanhBao === '0'? 'blue' : 'white', fontSize: 14}}>
                                        {item.DoiTuong}
                                    </Text>
                                </View>
                                <View style={{flex: 3.5, borderLeftWidth: 0.5, borderLeftColor: item.CanhBao === '0'? 'gray' : 'white', justifyContent: 'center'}}>
                                    <Text style = {{color: item.CanhBao === '0'? 'blue' : 'white', fontSize: 14, textAlign: 'center'}}>{item.LoaiSuKien}</Text>
                                </View>
                                <View style={{flex: 2.7, borderLeftWidth: 0.5, borderLeftColor: item.CanhBao === '0'? 'gray' : 'white', justifyContent: 'center'}}>
                                    <Text style = {{color: item.CanhBao === '0'? 'blue' : 'white', fontSize: 14, textAlign: 'center'}}>{item.ViTri}</Text>
                                </View>
                                <View style={{flex: 2, borderLeftWidth: 0.5, borderLeftColor: item.CanhBao === '0'? 'gray' : 'white', justifyContent: 'center'}}>
                                    <Text style = {{color: item.CanhBao === '0'? 'blue' : 'white', fontSize: 14, textAlign: 'center'}}>{item.ThoiGian}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>}
            />
        </View>
        
        );
    }
}
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
});