import client from '../../services/BinanceServices';

export const fetchCryptoPrices = () => dispatch => {

      client.prices().then( result => {


            dispatch({type: 'binance.fetchCryptoPrices',payload:result});

          }
      ).catch(error => {
        dispatch({type: 'binance.fetchCryptoricesError',payload:error});
      })



};

