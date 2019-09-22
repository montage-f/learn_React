/**
 * Created by montage_fz on 2019-09-22
 */
import {fromJS} from 'immutable';

import * as headerTypes from './constants';


const defaultState = fromJS({
    isFocus: false,
});
export default (state = defaultState, action) => {
    const {type} = action;
    if (type === headerTypes.HANDLE_FOCUS) {
        return state.set('isFocus', true);
    } else if (type === headerTypes.HANDLE_BLUR) {
        return state.set('isFocus', false);
    }
    return state;
}
