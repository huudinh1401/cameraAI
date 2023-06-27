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
    const backgroundEventAll = this.state.eventAll ? 'yellow' : 'blanchedalmond';
    const backgroundEventBSX = this.state.eventBSX ? 'yellow' : 'blanchedalmond';
    const backgroundEventFace = this.state.eventFace ? 'yellow' : 'blanchedalmond';
    const backgroundEventDD = this.state.eventDD ? 'yellow' : 'blanchedalmond';
    
    return (
        <View style = { styles.mainView }>
            <StatusBar barStyle={'light-content'}/>
            <View style={{flexDirection: 'row', height: 50, width: '100%', backgroundColor: backgroundEventAll, alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: 0.5}}>
                <TouchableOpacity style={{flex: 8.5, alignItems: 'center'}} onPress = { () => this._onPressEvent(1)}>
                    <Text style={{fontSize: 16, color: 'black'}}>Tất cả sự kiện</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', height: 50, width: '100%', backgroundColor:'#fff', borderBottomColor: 'gray', borderBottomWidth: 0.5}}>
                <View style={{flex: 1/3, backgroundColor: backgroundEventBSX, justifyContent: 'center', padding: 3}}>
                    <TouchableOpacity onPress = { () => this._onPressEvent(2)} >
                        <Text style={{fontSize: 12, textAlign: 'center', color: 'black'}}>Nhận diện biển số xe</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1/3, backgroundColor: backgroundEventFace, justifyContent: 'center', padding: 3, borderLeftColor: 'gray', borderLeftWidth: 0.5}}>
                    <TouchableOpacity onPress = { () => this._onPressEvent(3)} >
                        <Text style={{fontSize: 12, textAlign: 'center', color: 'black'}}> Nhận diện khuôn mặt </Text>
                    </TouchableOpacity>

                </View>
                <View style={{flex: 1/3, backgroundColor: backgroundEventDD, justifyContent: 'center', padding: 3, borderLeftColor: 'gray', borderLeftWidth: 0.5}}>
                    <TouchableOpacity onPress = { () => this._onPressEvent(4)}  >
                        <Text style={{fontSize: 12, textAlign: 'center', color: 'black'}}> Nhận diện đám đông </Text>
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
 
});