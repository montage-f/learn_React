/**
 * Created by MonTage_fz on 2019/9/23
 */
import styled from 'styled-components';

export const Item = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow: hidden;
    .pic{
        display:block;
        width:125px;
        height: 100px;
        float:right;
        border-radius:10px;
        
    }
`;
export const Info = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:18px;
        font-size:13px;
        color:#999;
    }
`;
