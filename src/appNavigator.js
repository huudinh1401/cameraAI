import { createStackNavigator } from "react-navigation-stack";
import homeScreen from "./screens/homeScreen";
import notifyScreen from "./screens/notifyScreen";

const appNavigator = createStackNavigator(
  {
    Home: {
      screen: homeScreen,
      navigationOptions: { headerShown: false }
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
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#339966' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    },
  }
);

  export default appNavigator;