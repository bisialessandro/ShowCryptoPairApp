/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ImageBackground,  StyleSheet,View} from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import AppStack from './src/router/AppStack';
import {navigationService} from "./src/services/NavigationService";
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistor from "./src/redux/persistStore";

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Provider store = {store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppStack ref={navigatorRef => {
                        navigationService.setTopLevelNavigator(navigatorRef);
                    }}/>
                </PersistGate>
            </Provider>

        </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


