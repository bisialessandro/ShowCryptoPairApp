/**
 * Created by abisi on 2019-07-03
 */
import React,{Component} from 'react';
import NetInfo from "@react-native-community/netinfo";
import {connect} from "react-redux";
import {setConnectionStatus, setConnectionType} from "../redux/utils";
import {Alert} from 'react-native';
import NetworkCheckComponent from './NetworkCheckComponent';

class NetworkCheckContainer extends Component {

    async componentDidMount(){


        NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            this.props.setConnectionStatus(state.isConnected);
            this.props.setConnectionType(state.type);


            if(!state.isConnected) {

                Alert.alert( 'The connection has been lost.',
                    'Turn it on to continue use all the functions of the app!',
                    [
                        {text: 'Ok', onPress: () => console.log('Ok pressed')},


                    ],
                    {cancelable: true});

            }else{

            }


        });





    }


    render(){

        return <NetworkCheckComponent
                                      connectionType={this.props.getConnectionType}
                                      isConnected={this.props.isConnected}
        />

    }
}

export default connect(
    state => ({
        getConnectionType: state.utils.getConnectionType,
        isConnected:state.utils.isConnected

    }), {
        setConnectionStatus,
        setConnectionType
    },)(NetworkCheckContainer);
