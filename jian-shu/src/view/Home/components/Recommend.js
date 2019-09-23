import React, {Component} from 'react';
import {Recommend} from '../styles';
import rightRecommend from '../../../image/right-recommend.png';

class index extends Component {
    
    render() {
        return (
            <Recommend.Container className="Recommend">
                {
                    Array.from({length: 4}).map((item, index) =>
                        <Recommend.Item key={index}>
                            <a href="/">
                                <img src={rightRecommend}
                                     alt="" />
                            </a>
                        </Recommend.Item>,
                    )
                }
            </Recommend.Container>
        );
    }
}

export default index;
