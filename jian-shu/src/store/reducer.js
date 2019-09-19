/**
 * Created by MonTage_fz on 2019/9/19
 */
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes';

const defaultState = {
    inputValue: 'hello',
    list: [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ],
};

// reducer 必须是纯函数,
// 也就是说给定固定的输入, 就会有固定的输出,
// 而且不会有任何的副作用
export default (state = defaultState, action) => {
    const {type, value} = action;
    const newState = JSON.parse(JSON.stringify(state));
    if (type === CHANGE_INPUT_VALUE) {
        newState.inputValue = value;
        return newState;
    } else if (type === ADD_TODO_ITEM) {
        newState.list.push({title: newState.inputValue});
        newState.inputValue = '';
        return newState;
    } else if (type === DELETE_TODO_ITEM) {
        newState.list.splice(value, 1);
        return newState;
    }
    return state;
}
