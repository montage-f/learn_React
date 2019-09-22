/**
 * Created by montage_fz on 2019-09-22
 */
import {fromJS} from 'immutable';

import * as headerTypes from './constants';


const defaultState = fromJS({
    isFocus: false,
    list: [],
    page: 0,
    degree: 0,
    totalPage: 1,
    mouseIn: false,
});
export default (state = defaultState, action) => {
    const {type, value, totalPage} = action;
    switch (type) {
        case headerTypes.HANDLE_FOCUS:
            return state.set('isFocus', true);
        case headerTypes.HANDLE_BLUR:
            return state.set('isFocus', false);
        case headerTypes.CHANGE_LIST:
            // state.set('list', value).set('totalPage', totalPage);
            // 该方法与上面方法相同
            return state.merge({
                list: value,
                totalPage: totalPage,
            });
        case headerTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case headerTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case headerTypes.CHANGE_PAGE:
            return state.set('page', value);
        case headerTypes.CHANGE_DEGREE:
            return state.set('degree', value);
        default:
            return state;
    }
}
