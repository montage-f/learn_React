/**
 * Created by MonTage_fz on 2019/9/20
 */
import {put, takeEvery} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from '../store/actionCreators';

import axios from 'axios';

function* getTodoList() {
    let {data} = yield axios.get('../../mock/todoList.json');
    const action = initListAction(data);
    yield put(action);
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getTodoList);
}

export default mySaga;
