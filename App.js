import React from "react";
import {
  View,
  Text
} from "react-native";
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from './src/view/home/HomeScreen'
import DetailScreen from './src/view/home/DetailScreen'


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
      },
      headerRight: <View/>
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;