/**
 * Created by abisi on 2019-06-27
 */

import { CONFIG_APP } from '../config/config.app';

class ConfigService {
    constructor() {
    }

    getEnvironment = () => {
        return CONFIG_APP.ENVIRONMENT
    };

    getClientApiServer = () => {
        return CONFIG_APP.API_CLIENT_SERVER
    };

    getSecurityApiKey = () => {
        return CONFIG_APP.API_KEY
    }
}

export const configService = new ConfigService();