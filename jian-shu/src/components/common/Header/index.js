import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
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

class index extends Component {
    state = {
        isFocus: false,
    };
    
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
                        className={this.state.isFocus ? 'focus' : ''}>
                        <CSSTransition
                            in={this.state.isFocus}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.state.isFocus ? 'focus' : ''}
                                onFocus={this.handleFocus.bind(this)}
                                onBlur={this.handleBlur.bind(this)}
                            />
                        </CSSTransition>
                        <span className={this.state.isFocus ? 'focus iconfont' : 'iconfont'}>&#xe624;</span>
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
    
    handleFocus() {
        this.setState({
            isFocus: true,
        });
    }
    
    handleBlur() {
        this.setState({
            isFocus: false,
        });
    }
}

export default index;
