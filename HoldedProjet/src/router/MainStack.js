/**
 * Created by abisi on 2019-06-27
 */

import {createStackNavigator} from "react-navigation";
import MainContainer from "../screens/Main/MainContainer";

const MainStack = createStackNavigator({
    Main:{
        screen: MainContainer,
        navigationOptions: {
            header: null,
        }
    }
});

export default MainStack;