import { createStackNavigator } from "react-navigation-stack";
import homeScreen from "./screens/homeScreen";
import notifyScreen from "./screens/notifyScreen";
import loginScreen from "./screens/loginScreen";
import infoScreen from "./screens/InfoScreen";
import cameraScreen from "./screens/cameraScreen";


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
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#CC3300' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    },
  }
);
  export default appNavigator;