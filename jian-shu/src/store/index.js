/**
 * Created by MonTage_fz on 2019/9/19
 */
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    // 如果没有redux调试工具, 记得删除这一行
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(sagas);
export default store;
