/**
 * Created by montage_fz on 2019-09-23
 */
import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin:0 auto;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    float:left;
    width:625px;
    margin-left:15px;
    padding-top:30px;
    .banner-img{
        width: 100%;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    float:right;
    padding-top:30px;
    width:280px;
`;
export const BackTop = styled.div`
    position:fixed;
    width: 60px;
    height: 60px;
    right:100px;
    bottom:0;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;

`;
