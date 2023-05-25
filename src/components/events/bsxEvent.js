import React, {Component} from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    FlatList,
    Alert
} from 'react-native';
import { Icon } from 'react-native-elements'
import TitleEvent from './titileEvent';

const url = 'http://192.168.1.104/dataCamera/listEventBsx.php?page=';

export default class BsxEvent extends React.Component {
    componentDidMount() {
        this.getArrEvent()
        setInterval(() => {
            fetch(url+1)
            .then((response)=>response.json())
            .then(  (responseJson)=>{this.setState( { arrEventBsx : responseJson, refresh: false} );  })
        .catch((e)=>{});
        }, 5000);
    }

    constructor(props) {
        super(props);
        this.state = {
            arrEventBsx:[],
            refresh: false, page: 1
        }
    }
    async getArrEvent() {
        try {
            const response = await fetch(url+1);
            const json = await response.json();
            this.setState({ arrEventBsx: json, refresh: false });
        } catch (error) { Alert.alert('Lỗi!','Không có kết nối mạng...\nVui lòng thử lại!')} 
    }
    _onPressChiTiet = (id) =>{
        const { navigation } = this.props;
        navigation.navigate('ChiTietDT',{id}) 
    }
    _refresh(){
        this.setState({refresh: true})
        this.getArrEvent()
    }
    _onEndReached(){
        fetch(url+(this.state.page+1))
        .then((response)=>response.json())
        .then((responseJson)=>{
            if(responseJson.length !=0){
                this.setState({
                    arrEventBsx : this.state.arrEventBsx.concat(responseJson),
                    page : this.state.page+1,
                });
            } 
        })
        .catch((e)=>{});
    } 
    renderSeparator = () => {
        return ( <View style={{height: 0.5, width: "100%", backgroundColor: "gray"}}/>);
    };
    render() {
        const { navigation } = this.props;
        return (
        <View style = { styles.container }>
            <TitleEvent col1={'Đối tượng '} col2={'Camera'} col3={'Vị trí'} col4={'Thời gian'}/>
            <FlatList
                data={this.state.arrEventBsx}
                keyExtractor={(item, index) => index}
                ItemSeparatorComponent={this.renderSeparator}
                initialNumToRender={50}
                maxToRenderPerBatch = {20}

                refreshing={this.state.refresh}
                onRefresh={()=>{this._refresh()}}
                onEndReachedThreshold={0.2}
                onEndReached={()=>{this._onEndReached()}}

                renderItem={({item, index}) =>
                <View>
                    <TouchableOpacity
                        key={index}
                        onPress={() => this._onPressChiTiet(item.id)}
                    >
                        <View style ={{
                            flexDirection: 'row', height: 45, justifyContent: 'center', 
                            backgroundColor: '#EEEEEE' }}>
                            <View style ={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 1.8, justifyContent: 'center', padding: 2}}>
                                    <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 14}}>
                                        {item.DoiTuong}
                                    </Text>
                                </View>
                                <View style={{flex: 3.5, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                                    <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 14, textAlign: 'center'}}>{item.Camera}</Text>
                                </View>
                                <View style={{flex: 2.7, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                                    <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 14, textAlign: 'center'}}>{item.ViTri}</Text>
                                </View>
                                <View style={{flex: 2, borderLeftWidth: 0.5, borderLeftColor: 'gray', justifyContent: 'center'}}>
                                    <Text style = {{color: item.CanhBao === '0'? 'green' : 'red', fontSize: 14, textAlign: 'center'}}>{item.ThoiGian}</Text>
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