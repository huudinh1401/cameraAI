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
      navigationOptions: { 
        headerShown: false,
        headerBackTitle: false }
    },
    Login: {
      screen: loginScreen,
      navigationOptions: { headerShown: false }
    },
    Weather:{
      screen: WeatherScreen,
      navigationOptions: {
        title: 'Thời Tiết',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          textAlign: 'center',
        }
      }
    },
    New:{
      screen: NewScreen,
      navigationOptions: {
        title: 'Tin Tức',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          textAlign: 'center',
        }
      }
    },
  
    Camera: {
      screen: cameraScreen,
      navigationOptions: {
        title: 'Camera An Ninh',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          textAlign: 'center',
        }
      }
    },
    Notify: {
      screen: notifyScreen,
      navigationOptions: {
        title: 'Thông Báo',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          textAlign: 'center',
        }
      }
    },
    Info: {
      screen: infoScreen,
      navigationOptions: {
        title: 'Thông Tin Ứng Dụng',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          textAlign: 'center',
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