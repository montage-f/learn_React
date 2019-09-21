/**
 * Created by montage_fz on 2019-09-21
 */
import {CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM} from './actionTypes';

export const getChangeInputValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
});
export const getAddItem = () => ({
    type: ADD_ITEM,
});
export const getDeleteItem = (value) => ({
    type: DELETE_ITEM,
    value,
});
