/**
 * Created by montage_fz on 2019-09-22
 */
import * as headerTypes from './constants';

export const getHandleFocusAction = () => ({
    type: headerTypes.HANDLE_FOCUS,
});
export const getHandleBlurAction = () => ({
    type: headerTypes.HANDLE_BLUR,
});
