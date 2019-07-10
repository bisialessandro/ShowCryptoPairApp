const defaultState = {
  connectionType:null,
  isConnected:false
};

export const utils= (state = defaultState, action) => {
  let payload = action.payload;

  //console.log(JSON.stringify(payload),"payload");

  switch (action.type) {
    case 'utils.setConnectionStatus':
      return {
        ...state,
        isConnected:payload,

      };
    case 'utils.setConnectionType':
      return {
        ...state,
          connectionType:payload
      }





    default:
      return state;
  }
};
