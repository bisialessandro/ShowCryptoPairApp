/**
 * Created by abisi on 2019-06-27
 */

import { NavigationActions, StackActions} from "react-navigation";


let _navigator;

class NavigationService {


//Service to use navigation inside the App without using navigation props.
//For every navigation function it can be added a relative function here, if needed.
//Use only when needed
    setTopLevelNavigator(navigatorRef) {
        _navigator = navigatorRef;
    }

    navigate(routeName, params) {
        _navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }

    /**
     * e.g.,
     * await navigationService.multiNavigate("Main",[
     {routeName: "MainHome"},
     {
      routeName: "ConversationScreen",
      params: {}
    }
     * **/
    async multiNavigate(stackKey, commands) {

        let actions = commands.map((command) => {
            let routeName = command.routeName;
            let params = command.params;
            return NavigationActions.navigate({
                routeName,
                params,
            })
        });
        let index = actions.length - 1;

        _navigator.dispatch(
            StackActions.reset({
                index: index, //number of actions
                key: stackKey,
                actions: actions
            }));
    }
}

export const navigationService = new NavigationService();