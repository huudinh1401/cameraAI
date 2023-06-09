/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import App from './App';
import {name as appName} from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    // Your code to handle notifications in killed state. For example
    console.log('Killed state notification.', remoteMessage)
  });
  

AppRegistry.registerComponent(appName, () => App);
