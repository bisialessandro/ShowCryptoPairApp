/**
 * Created by abisi on 2019-06-27
 */

import {createStackNavigator} from "react-navigation";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

const SplashStack = createStackNavigator({
    SplashScreen:{
        screen: SplashScreen,
        navigationOptions: {
            header: null,
        }
    }
});

export default SplashStack;