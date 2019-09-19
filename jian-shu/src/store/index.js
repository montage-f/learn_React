/**
 * Created by MonTage_fz on 2019/9/19
 */
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
);


export default store;
