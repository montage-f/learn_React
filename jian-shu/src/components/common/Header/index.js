import React from 'react';
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
} from './style';

const index = (props) =>
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
                className={props.isFocus ? 'focus' : ''}>
                <CSSTransition
                    in={props.isFocus}
                    timeout={500}
                    classNames="slide"
                >
                    <NavSearch
                        className={props.isFocus ? 'focus' : ''}
                        onFocus={props.handleFocus}
                        onBlur={props.handleBlur}
                    />
                </CSSTransition>
                <span className={props.isFocus ? 'focus iconfont' : 'iconfont'}>&#xe624;</span>
            </NavSearchWrapper>
            <Addition>
                <Button className="writing">
                    <span className="iconfont">&#xe602;</span>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </Nav>
    </HeaderWrapper>;

const mapStateToProps = (state) => {
    return {
        isFocus: state.header.isFocus,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            const action = actionCreators.getHandleFocusAction();
            dispatch(action);
        },
        handleBlur() {
            const action = actionCreators.getHandleBlurAction();
            dispatch(action);
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
