/**
 * Created by MonTage_fz on 2019/9/19
 */
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


export default (state = defaultState, action) => {
    const {type, value, index} = action;
    const newState = JSON.parse(JSON.stringify(state));
    if (type === 'change_input_value') {
        newState.inputValue = value;
        return newState;
    } else if (type === 'add_todo_item') {
        newState.list.push({title: newState.inputValue});
        newState.inputValue = '';
        return newState;
    } else if (type === 'delete_todo_item') {
        newState.list.splice(value, 1);
        return newState;
    }
    return state;
}
