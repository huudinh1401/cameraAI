import React, {Component} from 'react';
import { StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar
 } from 'react-native';
import { Icon } from 'react-native-elements';
import AllEvent from '../components/events/allEvent';

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
    if (idEvent === 1){
        this.setState({eventAll: true, eventBSX: false, eventFace: false, eventDD: false})
    }
    if (idEvent === 2){
        this.setState({eventAll: false, eventBSX: true, eventFace: false, eventDD: false})
    }
    if (idEvent === 3){
        this.setState({eventAll: false, eventBSX: false, eventFace: true, eventDD: false})
    }
    if (idEvent === 4){
        this.setState({eventAll: false, eventBSX: false, eventFace: false, eventDD: true})
    }
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
                <TouchableOpacity
                    style={{flex: 8.5, alignItems: 'center'}}
                    onPress = { () => this._onPressEvent(1)}
                >
                    <Text style={{fontSize: 18, color: 'black'}}>
                        Tất cả sự kiện
                    </Text>
                </TouchableOpacity>
                <View style={{flex: 1.5, alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Icon
                            name='search'
                            type='ionicon'
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{flexDirection: 'row', height: 50, width: '100%', backgroundColor:'#fff', borderBottomColor: 'gray', borderBottomWidth: 0.5}}>
                <View style={{flex: 1/3, backgroundColor: backgroundEventBSX, justifyContent: 'center', padding: 3}}>
                    <TouchableOpacity
                        onPress = { () => this._onPressEvent(2)}
                    >
                        <Text style={{fontSize: 16, textAlign: 'center', color: 'black'}}>
                            Nhận diện biển số xe
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1/3, backgroundColor: backgroundEventFace, justifyContent: 'center', padding: 3, borderLeftColor: 'gray', borderLeftWidth: 0.5}}>
                    <TouchableOpacity
                        onPress = { () => this._onPressEvent(3)}
                    >
                        <Text style={{fontSize: 16, textAlign: 'center', color: 'black'}}>
                            Nhận diện khuôn mặt
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{flex: 1/3, backgroundColor: backgroundEventDD, justifyContent: 'center', padding: 3, borderLeftColor: 'gray', borderLeftWidth: 0.5}}>
                    <TouchableOpacity
                        onPress = { () => this._onPressEvent(4)}
                    >
                        <Text style={{fontSize: 16, textAlign: 'center', color: 'black'}}>
                            Nhận diện đám đông
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            <AllEvent navigation={navigation}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
  mainView: {
    flex: 1,
  },
 
});