/**
 * Created by abisi on 2019-06-25
 */

import { AsyncStorage } from 'react-native';

class StorageService {
    setItem(key, value) {
        if (value !== value.toString()) {
            value = JSON.stringify(value);
        }

        return AsyncStorage.setItem(key, value);
    }

    getItem(key) {
        return AsyncStorage.getItem(key);
    }

    removeItem(key) {
        return AsyncStorage.removeItem(key);
    }

    clear() {
        return AsyncStorage.clear();
    }
}

export const storageService = new StorageService();