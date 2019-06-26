/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import WelcomePageContainer from './src/screens/WelcomePage/WelcomePageContainer';
import {ImageBackground,  StyleSheet,View} from 'react-native';
import background from './src/assets/img/background.jpg';



export default class App extends Component {
  render() {
    return (

        <ImageBackground  source={background} style={styles.container}>
            <View>
                 <WelcomePageContainer></WelcomePageContainer>
            </View>
        </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


