/**
 * Created by montage_fz on 2019-09-21
 */
import styled from 'styled-components';
import logoImg from '../../../static/image/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    height: 56px;
    border-bottom:1px solid #f0f0f0;
`;
// 属性的两种写法, 可以直接在组件上添加, 或者是跟下面方法一样
export const Logo = styled.a.attrs({
    // href:'/'
})`
    position:absolute;
    top:0;
    left:0;
    width: 100px;
    height: 56px;
    display: block;
    background:url(${logoImg}) no-repeat;
    background-size: contain;
`;
export const Nav = styled.div`
    width:960px;
    height: 100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing: border-box;
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color: #333333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;
export const NavSearchWrapper = styled.div`
    position:relative;
    float:left;
    &.focus{
        width: 300px;
    }
    &>.iconfont{
        position: absolute;
        right: 5px;
        bottom:4px;
        width: 30px;
        height: 30px;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        &.focus{
            background: #444;
            color:#fff;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
})`
    width: 160px;
    height: 38px;
    outline:none;
    border:none;
    border-radius:19px;
    background: #eee;
    margin-top:9px;
    padding:0 40px 0 20px;
    box-sizing:border-box;
    font-size: 14px;
    color:#777;
    &::placeholder{
        color:#999;
    }
    &.focus{
        width: 300px;
    }
    
    &.slide-enter{
        transition:all .5s ease-out;
    }
    &.slide-enter-active{
        width: 300px;
    }
    &.slide-exit{
        transition:all .5s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;
export const SearchInfo = styled.div`
    position:absolute;
    width: 240px;
    padding:0 20px;
    top:56px;
    left:0;
    box-shadow:0 0 8px rgba(0,0,0,0.2);
`;
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
    &>.iconfont{
        float:right;
        margin-right:10px;
        transition:all 0.5s ease-out;
        transform: rotate(${props => props.degree}deg);
    }
`;
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:12px;
`;
export const SearchInfoMessage = styled.div`
    overflow:hidden;
`;
export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
    font-size:12px;
    padding: 0 5px;
    line-height:20px;
    border:1px solid #ddd;
    color: #787878;
    border-radius:3px;
`;
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height: 56px;
`;
export const Button = styled.div`
    float:right;
    margin-top:9px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writing{
        color:#fff;
        background: #ec6149;
            .iconfont{
                font-size:20px;
            }
    }
`;
