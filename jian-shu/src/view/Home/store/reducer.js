/**
 * Created by MonTage_fz on 2019/9/23
 */
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//img.alicdn.com/tfs/TB1qpwlQXXXXXcCXXXXXXXXXXXX-256-256.png_60x60.jpg_.webp',
    }, {
        id: 2,
        title: '天猫',
        imgUrl: '//img.alicdn.com/tps/i3/TB1DGkJJFXXXXaZXFXX07tlTXXX-200-200.png_60x60.jpg_.webp',
    }, {
        id: 3,
        title: '聚划算',
        imgUrl: '//img.alicdn.com/tps/i4/TB1CKSgIpXXXXccXXXX07tlTXXX-200-200.png_60x60.jpg_.webp',
    }],
    list: [{
        id: 1,
        title: '《二十岁的年纪，做八十岁想起来都会嘴角上扬的事》',
        info: '二十岁出头，正好处在一个尴尬的年纪。似乎看透了生活，实质却依旧单纯；似乎应有尽有，实质却一无所有；内心身怀雄心壮志，却又不得不脚踏实地。 身处二...',
        imgUrl:'//img.alicdn.com/tfscom/i1/28306811/TB2qvcteYwTMeJjSszfXXXbtFXa_!!28306811.jpg_180x180xzq90.jpg_.webp'
    }],
    
});
export default (state = defaultState, action) => {
    const {type, value} = action;
    switch (type) {
        default:
            return state;
    }
}
