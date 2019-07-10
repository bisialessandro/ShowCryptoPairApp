import client from '../../services/BinanceServices';
import {Alert} from 'react-native';
export const fetchCryptoPrices = () => dispatch => {

    dispatch({type: 'binance.startFetchData',payload:true});

      client.prices().then( result => {

         let values =  Object.keys(result).map(key => {
                  let jsonObj = {};
                  jsonObj[key] = result[key];
                  return jsonObj;
              }
          )

            dispatch({type: 'binance.fetchCryptoPrices',payload:values});


            return result;

          }
      ).catch(error => {
        dispatch({type: 'binance.fetchCryptoricesError',payload:error});
      })

};


export const setCryptoPairs = (cryptoPairs) => dispatch => {

    dispatch({type: 'binance.setCryptoPrices',payload:cryptoPairs});

};

export const setFilteredCryptoPairs = (filteredItems) => dispatch => {

    dispatch({type: 'binance.setFilteredCryptoPrices',payload:filteredItems});

};


export const pollingFetchingCrypto = (text) => dispatch => {

    client.prices().then( result => {

            let values =  Object.keys(result).map(key => {
                    let jsonObj = {};
                    jsonObj[key] = result[key];
                    return jsonObj;
                }
            )


            dispatch({type: 'binance.fetchCryptoPrices',payload:values});



            return result;

        }
    ).catch(error => {
        dispatch({type: 'binance.fetchCryptoricesError',payload:error});
    })



}



