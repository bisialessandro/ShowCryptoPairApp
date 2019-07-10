const defaultState = {
  crypto:null,
  cryptoFiltered:null,
  isFetchingCrypto:false
};

export const binance = (state = defaultState, action) => {
  let payload = action.payload;

  //console.log(JSON.stringify(payload),"payload");

  switch (action.type) {
    case 'binance.fetchCryptoPrices':
      return {
        ...state,
        crypto:payload,
        cryptoFiltered:payload,
        isFetchingCrypto:false

      };
    case 'binance.fetchCryptoricesError':
      return {
        ...state,
        isFetchingCrypto:false

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
    case 'binance.startFetchData':
      return {
        ...state,
        isFetchingCrypto:true


      }



    default:
      return state;
  }
};
