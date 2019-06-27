const defaultState = {
  tokens:[]
};

export const binance = (state = defaultState, action) => {
  let payload = action.payload;

  switch (action.type) {
    case 'binance.getTokens':
      return {
        ...state,

      };

    default:
      return state;
  }
};
