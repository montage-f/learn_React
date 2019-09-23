/**
 * Created by MonTage_fz on 2019/9/23
 */
import styled from 'styled-components';

export const Section = styled.section`

`;
export const Header = styled.header`
    overflow: hidden;
    font-size:14px;
    color:#969696;
    span{
        padding:10px 0;
        &.left{
            float:left;
        }
        &.right{
            float:right;
        }
    }
`;
export const Item = styled.div`
    img{
        width: 48px;
        height: 48px;
        border-radius:24px;
        border:1px solid #ccc;
        margin-right:10px;
        float:left;
    }
    span{
        display: block;
        padding-top:5px;
        margin-right:60px;
        font-size:14px;
    }
    a{
        float:right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    p{
        font-size: 12px;
        color: #969696;
        margin: 2px 0 10px;
        line-height:20px;
    }
`;

