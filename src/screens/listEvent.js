import React, {Component} from 'react';
import { StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar
 } from 'react-native';
import AllEvent from '../components/events/allEvent';
import BsxEvent from '../components/events/bsxEvent';

export default class ListEvent extends React.Component {
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({isLoading: false});
//     }, 1500)
//   }

  constructor(props) {
    super(props);
    this.state = {
      eventAll: true,
      eventBSX: false,
      eventFace: false,
      eventDD: false,
    }
  }

  _onPressEvent = (idEvent) => {
    if (idEvent === 1){ this.setState({eventAll: true, eventBSX: false, eventFace: false, eventDD: false}) }
    if (idEvent === 2){ this.setState({eventAll: false, eventBSX: true, eventFace: false, eventDD: false}) }
    if (idEvent === 3){ this.setState({eventAll: false, eventBSX: false, eventFace: true, eventDD: false}) }
    if (idEvent === 4){ this.setState({eventAll: false, eventBSX: false, eventFace: false, eventDD: true}) }
  }
  
  render() {
    const { navigation } = this.props;
    const { eventAll, eventBSX, eventFace, eventDD} = this.state;
    const borderColorAll    = eventAll  ?   'orange' : '';
    const borderColorBSX    = eventBSX  ?   'orange' : '';
    const borderColorFace   = eventFace ?   'orange' : '';
    const borderColorDD     = eventDD   ?   'orange' : '';
    
    return (
        <View style = { styles.mainView }>
            <StatusBar barStyle={'light-content'}/>
            
            <View style={styles.title}>
                <View style={{flex: 1/3, justifyContent: 'center', padding: 3, height: 45, borderBottomWidth: eventAll ? 3 : 0, borderBottomColor: borderColorAll}}>
                    <TouchableOpacity onPress = { () => this._onPressEvent(1)} >
                        <Text style={{fontSize: 13, textAlign: 'center', color: 'black', fontWeight: eventAll ? 'bold' : 'normal'}}>Tất cả</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1/3, justifyContent: 'center', padding: 3, height: 45, borderBottomWidth: eventBSX ? 3 : 0, borderBottomColor: borderColorBSX}}>
                    <TouchableOpacity onPress = { () => this._onPressEvent(2)} >
                        <Text style={{fontSize: 13, textAlign: 'center', color: 'black', fontWeight: eventBSX ? 'bold' : 'normal'}}>Biển số xe</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1/3, justifyContent: 'center', padding: 3, height: 45, borderBottomWidth: eventFace ? 3 : 0, borderBottomColor: borderColorFace}}>
                    <TouchableOpacity onPress = { () => this._onPressEvent(3)} >
                        <Text style={{fontSize: 13, textAlign: 'center', color: 'black', fontWeight: eventFace ? 'bold' : 'normal'}}>Khuôn mặt</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{flex: 1/3, justifyContent: 'center', padding: 3, height: 45, borderBottomWidth: eventDD ? 3 : 0, borderBottomColor: borderColorDD}}>
                    <TouchableOpacity onPress = { () => this._onPressEvent(4)}  >
                        <Text style={{fontSize: 13, textAlign: 'center', color: 'black', fontWeight: eventDD ? 'bold' : 'normal'}}>Đám đông</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            {
                this.state.eventAll ? <AllEvent navigation={navigation}/>
                : this.state.eventBSX ? <BsxEvent navigation={navigation}/>
                :
                    <View style={{paddingTop: 30, alignItems: 'center'}}>
                        <Text style={{color: 'blue', fontSize: 16}}>Tính năng hiện đang trong quá trình phát triển</Text>
                    </View>
            }
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
    mainView: { flex: 1, },
    title: {
        flexDirection: 'row', 
        height: 45, width: '100%', 
        backgroundColor:'#fff', 
        borderBottomColor: 'gray', 
        borderBottomWidth: 0.5,
        shadowColor: '#00000',
        shadowOffset:{width: 0, height:3},
        shadowRadius: 2,
        shadowOpacity: 0.3,
        elevation: 10,
    },
 
});