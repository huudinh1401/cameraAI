import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/screens/homeScreen";
import NotifyScreen from "./src/screens/notifyScreen";
import LoginScreen from "./src/screens/loginScreen";
import InfoScreen from "./src/screens/InfoScreen";
import CameraScreen from "./src/screens/cameraScreen";
import WeatherScreen from "./src/screens/weatherScreen";
import NewScreen from "./src/screens/newScreen";
import DsCamera from "./src/screens/listCamera";
import ListEvent from "./src/screens/listEvent";
import SearchEvent from "./src/components/events/searchEvent";
import FilterEvent from "./src/components/events/filterEvent";
import MapCamera from "./src/screens/mapCamera";
import BlackList from "./src/screens/blackList";
import HistoryItemBlackList from "./src/screens/historyItemBlackList";

enableScreens();
//const AppContainer = NavigationContainer(appNavigator);
const Stack = createNativeStackNavigator();

const App = () => {
  
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#CC3300' }, headerTitleAlign: 'center'}}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Weather" component={WeatherScreen} options={{ title: 'Thời Tiết'}} />
          <Stack.Screen name="New" component={NewScreen} options={{ title: 'Tin Tức'}} />
          <Stack.Screen 
            name="Camera"  component={CameraScreen}
            initialParams={{ rtsp1: 'no_data', rtsp2: 'no_data', rtsp3: 'no_data', camName1: 'no_data', camName2: 'no_data', camName3: 'no_data'}}
            options={{ title: 'Camera An Ninh'}} 
          />
          <Stack.Screen name="DsCam" component={DsCamera} options={{ headerShown: false}} />
          <Stack.Screen name="Notify" component={NotifyScreen} options={{ headerShown: false}} />
          <Stack.Screen name="Info" component={InfoScreen} options={{ headerShown: false}} />
          <Stack.Screen  name="DsSuKien" component={ListEvent} options={{ title: 'Danh Sách Sự Kiện'}}  />
          <Stack.Screen name="TimDoiTuong" component={SearchEvent} options={{ headerShown: false}} />
          <Stack.Screen name="LocDoiTuong" component={FilterEvent} options={{ headerShown: false}} />
          <Stack.Screen name="Black" component={BlackList} options={{ title: 'Danh sách đối tượng cảnh báo'}} />
          <Stack.Screen name="HisItemBlack" component={HistoryItemBlackList} options={{ headerShown: false }} />
          <Stack.Screen name="Map" component={MapCamera} options={{ title: 'Bản đồ Camera'}} />

        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default App;
