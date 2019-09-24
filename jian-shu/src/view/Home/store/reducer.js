/**
 * Created by MonTage_fz on 2019/9/23
 */
import {fromJS} from 'immutable';
import * as Types from './constants';

const defaultState = fromJS({
    topicList: [],
    list: [],
    writerList: [],
    recommendList: [],
    
});
export default (state = defaultState, action) => {
    const {type, value} = action;
    switch (type) {
        case Types.GET_TOPIC_LIST:
            return state.set('topicList', value);
        case Types.GET_LIST:
            return state.set('list', value);
        case Types.GET_RECOMMEND_LIST:
            return state.set('recommendList', value);
        case Types.GET_WRITER_LIST:
            return state.set('writerList', value);
        case Types.ADD_LIST_ITEM:
            return state.set('list', state.get('list').concat(value));
        default:
            return state;
    }
}
