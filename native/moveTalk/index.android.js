/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import {
  AppRegistry,
  Button,
  View,
  Text,
  StyleSheet
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import MainScreen from './src/main.screen.js';
import ProfileScreen from './src/profile.screen.js';
import AnimationDemo from './src/AnimationDemo.js';


const moveTalk = StackNavigator({
  Main: {
    screen: MainScreen
  },
  AnimationDemo: {
    screen: AnimationDemo
  },
  Main: {
    screen: MainScreen
  },
  Profile: {
    screen: ProfileScreen,
  }
})

AppRegistry.registerComponent('moveTalk', () => moveTalk);
