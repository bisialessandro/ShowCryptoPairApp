/**
 * Created by abisi on 2019-06-27
 */

import { persistStore } from 'redux-persist'
import store from './store';

export default persistStore(store);