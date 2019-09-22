/**
 * Created by montage_fz on 2019-09-22
 */
import * as headerTypes from './constants';

const defaultState = {
    isFocus: false,
};
export default (state = defaultState, action) => {
    const {type} = action;
    const newState = JSON.parse(JSON.stringify(state));
    if (type === headerTypes.HANDLE_FOCUS) {
        newState.isFocus = true;
        return newState;
    } else if (type === headerTypes.HANDLE_BLUR) {
        newState.isFocus = false;
        return newState;
    }
    return state;
}
