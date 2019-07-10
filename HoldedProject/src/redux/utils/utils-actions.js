

export const setConnectionStatus = (status) => dispatch => {


    dispatch({type: 'utils.setConnectionStatus',payload:status});

};


export const setConnectionType = (status) => dispatch => {


    dispatch({type: 'utils.setConnectionType',payload:status});

};




