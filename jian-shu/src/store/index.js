/**
 * Created by MonTage_fz on 2019/9/19
 */
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
    // 如果没有redux调试工具, 记得删除这一行
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default store;
