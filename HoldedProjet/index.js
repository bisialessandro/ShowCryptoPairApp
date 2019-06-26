/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {registerScreens} from './src/config/screensRouting'
import store from './src/config/store';
import { Provider } from 'react-redux';

registerScreens(store,Provider);

AppRegistry.registerComponent(appName, () => App);
