/**
 * Created by abisi on 2019-06-27
 */
import Config from 'react-native-config';

export const CONFIG_APP = {
    API_CLIENT_SERVER: Config.API_CLIENT_SERVER,
    API_KEY: Config.API_KEY,
    ENVIRONMENT: Config.ENVIRONMENT,
    REDUX_CACHE_KEY: 'root'
};

export const isDevEnvironment = () => {
    return CONFIG_APP.ENVIRONMENT === 'dev'
};
