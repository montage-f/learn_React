/**
 * Created by MonTage_fz on 2019/9/19
 */
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
// 因为在redux里面, action必须是普通对象, 所以引入redux之后, 才可以在action里面返回一个函数
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = createStore(
    reducer,
    // 如果没有redux调试工具, 记得删除这一行
    composeEnhancers(applyMiddleware(thunk)),
);


export default store;
