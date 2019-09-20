/**
 * Created by MonTage_fz on 2019/9/20
 */
const initState = {
    inputValue: 'hello world',
    list: [],
};
export default (state = initState, action) => {
    const {type, value} = action;
    const newState = JSON.parse(JSON.stringify(state));
    if (type === 'change_input_value') {
        newState.inputValue = value;
        return newState;
    }
    return state;
}
