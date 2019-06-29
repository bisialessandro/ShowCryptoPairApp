const defaultState = {
  crypto:null,
  cryptoFiltered:null
};

export const binance = (state = defaultState, action) => {
  let payload = action.payload;

  //console.log(JSON.stringify(payload),"payload");

  switch (action.type) {
    case 'binance.fetchCryptoPrices':
      return {
        ...state,
        crypto:payload,
        cryptoFiltered:payload

      };
    case 'binance.fetchCryptoPricesError':
      return {
        ...state,

      }

    case 'binance.setCryptoPairs':
      return {
        ...state,
        crypto:payload


      }
    case 'binance.setFilteredCryptoPrices':
      return {
        ...state,
        cryptoFiltered:payload


      }



    default:
      return state;
  }
};
