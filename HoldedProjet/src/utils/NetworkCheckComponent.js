/**
 * Created by abisi on 2019-07-03
 */
import React from 'react';



const NetworkCheckComponent = (props) => {
    return (props.isConnected&&props.showSnackbar);
}

export default NetworkCheckComponent;