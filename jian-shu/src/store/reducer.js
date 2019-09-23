/**
 * Created by montage_fz on 2019-09-22
 */
import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../components/common/Header/store';
import {reducer as HomeReducer} from '../view/Home/store';

export default combineReducers({
    header: headerReducer,
    home: HomeReducer,
});
