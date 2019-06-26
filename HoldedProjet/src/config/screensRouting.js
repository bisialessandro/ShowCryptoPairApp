/**
 * Created by abisi on 2019-06-26
 */
import { Navigation } from 'react-native-navigation';
import WelcomePageContainer from '../screens/WelcomePage/WelcomePageContainer'

export const registerScreens = (store, Provider) => {
    const screens = [
        WelcomePageContainer
    ];

    screens.forEach(screen => {
        Navigation.registerComponent(
            screen.navigatorOptions.screen,
            () => screen,
            store,
            Provider
        );
    });
};


export const openWelcomePage = () => {
    Navigation.startSingleScreenApp({
        screen: WelcomePageContainer.navigatorOptions,layout: {
            orientation: 'portrait' // An array of supported orientations
        }
    });
};