/**
 * Created by MonTage_fz on 2019/9/23
 */
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [],
    list: [],
    writerList: [],
    recommendList: [],
    
});
export default (state = defaultState, action) => {
    const {type, value} = action;
    switch (type) {
        case 'get_topic_list':
            return state.set('topicList', value);
        case 'get_list':
            return state.set('list', value);
        case 'get_recommend_list':
            return state.set('recommendList', value);
        case 'get_writer_list':
            return state.set('writerList', value);
        default:
            return state;
    }
}
