/**
 * Created by montage_fz on 2019-09-22
 */
import {combineReducers} from 'redux';
import {reducer as headerReducer} from '../components/common/Header/store';

export default combineReducers({
    header: headerReducer,
});
