/**
 * Created by abisi on 2019-07-03
 */
import React,{Component} from 'react';
import NetInfo from "@react-native-community/netinfo";
import {connect} from "react-redux";
import {setConnectionStatus, setConnectionType} from "../redux/utils";
import Snackbar from 'react-native-snackbar';
import {Alert} from 'react-native';
import NetworkCheckComponent from './NetworkCheckComponent';

class NetworkCheckContainer extends Component {

    async componentDidMount(): void {



        NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            Alert.alert(state.isConnected,State)

        });






    }

    componentWillUnmount(): void {

    }

    showSnackbar = () => {
        Snackbar.show({
            title: 'Hello ',
            duration: Snackbar.LENGTH_INDEFINITE,
            action: {
                title: 'UNDO',
                color: 'green',
                onPress: () => { /* Do something. */ },
            },
        });
    }

    render(){

        return <NetworkCheckComponent showSnackbar={this.showSnackbar}
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