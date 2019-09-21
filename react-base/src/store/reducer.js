/**
 * Created by MonTage_fz on 2019/9/20
 */
import {CHANGE_INPUT_VALUE} from './actionTypes';

const initState = {
    inputValue: 'hello world',
    list: [],
};
export default (state = initState, action) => {
    const {type, value} = action;
    const newState = JSON.parse(JSON.stringify(state));
    if (type === CHANGE_INPUT_VALUE) {
        newState.inputValue = value;
        return newState;
    } else if (type === 'add_item') {
        newState.list.push(newState.inputValue);
        return newState;
    } else if (type === 'delete_item') {
        newState.list.splice(value, 1);
        return newState;
    }
    return state;
}
