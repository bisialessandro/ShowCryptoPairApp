/**
 * Created by abisi on 2019-07-03
 */
import React from 'react';

import {View} from 'react-native';

const NetworkCheckComponent = (props) => {

    return (!props.isConnected&&<View></View>);
}

export default NetworkCheckComponent;
