const defaultState = {
  crypto:{}
};

export const binance = (state = defaultState, action) => {
  let payload = action.payload;

  console.log(JSON.stringify(payload),"payload");

  switch (action.type) {
    case 'binance.fetchCryptoPrices':
      return {
        ...state,
        crypto:payload

      };
    case 'binance.fetchCryptoPricesError':
      return {
        ...state,


      };

    default:
      return state;
  }
};
