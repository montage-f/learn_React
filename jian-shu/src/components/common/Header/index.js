import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoMessage,
    SearchInfoItem,
} from './style';

class index extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <NavSearchWrapper
                        className={this.props.isFocus ? 'focus' : ''}>
                        <CSSTransition
                            in={this.props.isFocus}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.isFocus ? 'focus' : ''}
                                onFocus={() => this.props.handleFocus(this.props.list)}
                                onBlur={this.props.handleBlur}
                            />
                        </CSSTransition>
                        <span className={this.props.isFocus ? 'focus iconfont' : 'iconfont'}>&#xe624;</span>
                        <GetSearchInfoArea
                            props={this.props} />
                    </NavSearchWrapper>
                    <Addition>
                        <Button className="writing">
                            <span className="iconfont">&#xe602;</span>
                            写文章
                        </Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}


const GetSearchInfoArea = ({
                               props: {
                                   isFocus, mouseIn, list,
                                   page, totalPage, handleMouseEnter,
                                   handleMouseLeave, handleChangeInfo,
                                   degree,
                               },
                           }) => {
    if (!(isFocus || mouseIn)) return null;
    // list.toJS() 将immutable 转成普通js
    return (
        <SearchInfo
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <SearchInfoTitle degree={degree}>
                热门搜索
                <SearchInfoSwitch
                    onClick={() => handleChangeInfo(page, totalPage)}>
                    换一批
                </SearchInfoSwitch>
                <i className="iconfont">&#xe600;</i>
            </SearchInfoTitle>
            <SearchInfoMessage>
                {
                    list.slice(page % totalPage * 10, (page % totalPage + 1) * 10).map((item, index) => {
                        return (
                            <SearchInfoItem key={index}>
                                {item}
                            </SearchInfoItem>
                        );
                    })
                }
            </SearchInfoMessage>
        </SearchInfo>
    );
};

const mapStateToProps = (state) => {
    // state.get('header').get('isFocus')
    return {
        // 与上面的方法相同
        isFocus: state.getIn(['header', 'isFocus']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        degree: state.getIn(['header', 'degree']),
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.getHandleFocusAction());
        },
        handleBlur() {
            const action = actionCreators.getHandleBlurAction();
            dispatch(action);
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangeInfo(page) {
            dispatch(actionCreators.changeDegree((page + 1) * 360));
            dispatch(actionCreators.handleChangeInfo(page + 1));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
