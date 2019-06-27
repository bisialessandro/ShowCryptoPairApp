/**
 * Created by abisi on 2019-06-27
 */


import {createStackNavigator} from "react-navigation";
import WelcomePageContainer from "../screens/WelcomePage/WelcomePageContainer";

const WelcomeStack = createStackNavigator({
    WelcomeScreen:{
        screen: WelcomePageContainer,
        navigationOptions: {
            header: null,
        }
    }
});

export default WelcomeStack;