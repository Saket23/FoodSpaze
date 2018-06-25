import { combineReducers } from 'redux';

import ApiData from './reduce';

const rootReducer = combineReducers({
    apiData: ApiData
});

export default rootReducer;