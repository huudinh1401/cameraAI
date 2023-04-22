import { createStackNavigator } from "react-navigation-stack";
import homeScreen from "./screens/homeScreen";
import notifyScreen from "./screens/notifyScreen";
import loginScreen from "./screens/loginScreen";
import infoScreen from "./screens/InfoScreen";
import cameraScreen from "./screens/cameraScreen";
import WeatherScreen from "./screens/weatherScreen";
import NewScreen from "./screens/newScreen";


const appNavigator = createStackNavigator(
  {
    Home: {
      screen: homeScreen,
      navigationOptions: { headerShown: false }
    },
    Login: {
      screen: loginScreen,
      navigationOptions: { headerShown: false }
    },
    Weather:{
      screen: WeatherScreen,
      navigationOptions: {
        title: 'Thời Tiết',
        headerTitleStyle: {
          textAlign: 'center',
          paddingRight: 30,
        }
      }
    },
    New:{
      screen: NewScreen,
      navigationOptions: {
        title: 'Tin Tức',
        headerTitleStyle: {
          textAlign: 'center',
          paddingRight: 30,
        }
      }
    },
  
    Camera: {
      screen: cameraScreen,
      navigationOptions: {
        title: 'Camera An Ninh',
        headerTitleStyle: {
          textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
        }
      }
    },
    Notify: {
      screen: notifyScreen,
      navigationOptions: {
        title: 'Thông Báo',
        headerTitleStyle: {
          textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
        }
      }
    },
    Info: {
      screen: infoScreen,
      navigationOptions: {
        title: 'Thông Tin Ứng Dụng',
        headerTitleStyle: {
          textAlign: 'center',
          flexGrow:1,
          alignSelf:'center',
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#CC3300' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    },
  }
);
  export default appNavigator;