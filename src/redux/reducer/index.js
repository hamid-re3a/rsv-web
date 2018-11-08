
import { combineReducers } from 'redux';

import user from './user';
import fiche from './fiche';

export default combineReducers({
    user,
    fiche
});