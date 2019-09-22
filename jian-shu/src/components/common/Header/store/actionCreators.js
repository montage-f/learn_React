/**
 * Created by montage_fz on 2019-09-22
 */
import axios from 'axios';
import {fromJS} from 'immutable';
import * as headerTypes from './constants';

const getChangeList = (data) => ({
        type: headerTypes.CHANGE_LIST,
        // 因为接口返回的是 普通数组, 所以我们需要在这里将这个数组变成immutable数组
        value: fromJS(data),
        totalPage: Math.ceil(data.length / 10),
    }
);

export const getHandleFocusAction = () => ({
    type: headerTypes.HANDLE_FOCUS,
});

export const getHandleBlurAction = () => ({
    type: headerTypes.HANDLE_BLUR,
});

export const getList = () => {
    return async (dispatch) => {
        const {data: {success, data}} = await axios.get('/api/headerList.json');
        if (success) {
            dispatch(getChangeList(data));
        }
    };
};
export const mouseEnter = () => ({
    type: headerTypes.MOUSE_ENTER,
});
export const mouseLeave = () => ({
    type: headerTypes.MOUSE_LEAVE,
});
export const handleChangeInfo = (page) => {
    return {
        type: headerTypes.CHANGE_PAGE,
        value: page,
    };
};

export const changeDegree = (degree) => ({
    type: headerTypes.CHANGE_DEGREE,
    value: degree,
});
