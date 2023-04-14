import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer } from "react-navigation";
import appNavigator from './src/appNavigator';

const AppContainer = createAppContainer(appNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
