/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ImageBackground,  StyleSheet,View} from 'react-native';

import AppStack from './src/router/AppStack';
import {navigationService} from "./src/services/NavigationService";

export default class App extends Component {
  render() {
    return (

        <View style={styles.container}>

                <AppStack ref={navigatorRef => {
                    navigationService.setTopLevelNavigator(navigatorRef);
                }}/>

        </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


