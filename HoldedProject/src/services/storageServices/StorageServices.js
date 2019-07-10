/**
 * Created by abisi on 2019-06-25
 */

import {AsyncStorage} from "react-native";

class StorageService {
    storeData = (key, value) => {
        try {
            AsyncStorage.setItem(key, value);
        } catch (error) {
            console.error('Error while storing: ' + error);
        }
    };

    retrieveData = async (key) => {
        let value = '';
        try {
            value = await AsyncStorage.getItem(key);
            if (value !== null) {
                // console.log("Inside retrieve" + value);
                return value;
            }
        } catch (error) {
            console.error('Error while retrieving: '+error);
        }
    };

    storeData = (key, value) => {
        try {
            AsyncStorage.setItem(key, value);
        } catch (error) {
            console.error('Error while storing: ' + error);
        }
    };

    mergeData = async (key, value) => {
        try {
            AsyncStorage.mergeItem(key, value);
        } catch (error) {
            console.error(error);
        }
    };

    deleteData = (key) => {
        try {
            AsyncStorage.removeItem(key);
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    };

    /**
     *
     * @param cacheKey key to retrieve object saved in redux cache.
     * @param state the redux redux to retrieve
     * @param printDebug if true print out the various object retrieved, false otherwise
     * @returns {Promise<any>}
     */
    getObjectFromReduxCache = async (cacheKey, state, printDebug) => {
        const root = await this.retrieveData('persist:'+cacheKey);
        try {
            const rootObj = JSON.parse(root);
            const stateObj = JSON.parse(rootObj[state]);
            if (printDebug) {
                console.log('redux-persist cached root: ', root);
                console.log('redux-persist cached root object: ', rootObj);
                console.log('redux-persist cached redux: ', stateObj);
            }
            return stateObj;
        } catch (e) {
            console.log(e);
            return null
        }
    }
}

export const storageService = new StorageService();