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
import {connect, Provider} from 'react-redux';
import AppStack from './src/router/AppStack';
import {navigationService} from "./src/services/NavigationService";
import NetworkCheckContainer from "./src/utils/NetworkCheckContainer";



class App extends Component {




    render() {
    return (
        <View style={styles.container}>
            <Provider store = {store}>

                <NetworkCheckContainer/>

                <AppStack ref={navigatorRef => {
                    navigationService.setTopLevelNavigator(navigatorRef);
                }}/>

            </Provider>

        </View>


    );
  }
}

export default (App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


